import { Injectable } from '@angular/core';

@Injectable()
export class PanelService {
	panel = {
		code: "",
		country: "",
		continent: [],
		colors: {
			red: "",
			orange: "",
			yellow: "",
			green: "",
			blue: "",
			maroon: "",
			white: "",
			black: ""
		},
		shapes: {
			bi: "",
			border: "",
			canton: "",
			diagonal: "",
			emblem: "",
			nordic: "",
			star: "",
			triangle: "",
			trih : "",
			triv : ""
		}
	};

	getPanel() {
		return this.panel
	}

	resetPanel(){
		this.panel = {
			code: "",
			country: "",
			continent: [],
			colors: {
				red: "",
				orange: "",
				yellow: "",
				green: "",
				blue: "",
				maroon: "",
				white: "",
				black: ""
			},
			shapes: {
				bi: "",
				border: "",
				canton: "",
				diagonal: "",
				emblem: "",
				nordic: "",
				star: "",
				triangle: "",
				trih : "",
				triv : ""
			}
		};
		return this.panel;
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
		return this.panel;
	}

	toggleShape(shape){
		let status = this.panel.shapes[shape];
		if(status === true){
			this.panel.shapes[shape] = false;
		}
		else if(status === false){
			this.panel.shapes[shape] = "";
		}
		else if(status === ""){
			this.panel.shapes[shape] = true;
		}
		return this.panel;
	}
}
