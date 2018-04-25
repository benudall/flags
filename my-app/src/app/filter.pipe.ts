import { Pipe, PipeTransform } from '@angular/core';
import { PanelService } from './panel.service';

@Pipe({
	name: 'filter',
	pure: false
})
export class FilterPipe implements PipeTransform {
	constructor(private panelService : PanelService) { }

	transform(items: any[]): any[] {
		if(!items) return [];
		let panel = this.panelService.getPanel();

		return items.filter( item => {
			let res = true;

			res = res && item.code.toLowerCase().includes(panel.code);
			res = res && item.country.toLowerCase().includes(panel.country);
			if(panel.continent.length == 0){
				res = res && true;
			}
			else{
				if(panel.continent.includes(item.continent)){
					res = res && true;
				}
				else{
					res = res && false;
				}
			}

			for(let col in panel.colors){
				if(panel.colors[col] === true){
					res = res && item.colors.includes(col);
				}
				else if(panel.colors[col] === false){
					res = res && !item.colors.includes(col);
				}
			}

			for(let sha in panel.shapes){
				if(panel.shapes[sha] === true){
					res = res && item.shapes.includes(sha);
				}
				else if(panel.shapes[sha] === false){
					res = res && !item.shapes.includes(sha);
				}
			}
			return res;
		});
	}
}
