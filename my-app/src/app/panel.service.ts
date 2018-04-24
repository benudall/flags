import { Injectable } from '@angular/core';

@Injectable()
export class PanelService {
	panel = {
		code: "",
		country: "",
		colors: {
			red: "",
			orange: "",
			yellow: "",
			green: "",
			blue: "",
			purple: "",
			white: "",
			grey: "",
			black: ""
		}
	};

	getPanel() {
		return this.panel
	}

	toggleColor(color){
		let status = this.panel.colors[color];
		if(status === true){
			this.panel.colors[color] = false;
		}
		else if(status === false){
			this.panel.colors[color] = "";
		}
		else if(status === ""){
			this.panel.colors[color] = true;
		}
	}
}
