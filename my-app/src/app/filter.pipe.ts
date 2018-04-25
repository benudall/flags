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
			res = res && item.continent.toLowerCase().includes(panel.continent);

			for(let c in panel.colors){
				if(panel.colors[c] === true){
					res = res && item.colors.includes(c);
				}
				else if(panel.colors[c] === false){
					res = res && !item.colors.includes(c);
				}
			}

			for(let s in panel.shapes){
				if(panel.shapes[s] === true){
					res = res && item.shapes.includes(s);
				}
				else if(panel.shapes[c] === false){
					res = res && !item.shapes.includes(s);
				}
			}
			return res;
		});
	}
}
