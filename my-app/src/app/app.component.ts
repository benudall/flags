import { Component } from '@angular/core';
import { PanelService } from './panel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private panelService : PanelService) { }
	panel = this.panelService.getPanel();

	toggleColor(color){
		this.panelService.toggleColor(color);
	}

	toggleShape(shape){
		this.panelService.toggleShape(shape);
	}
	data = [
		{
			code: "ad",
			continent: "Europe",
			country: "Andorra",
			colors: ["blue","yellow","red"],
			shapes: ["triv","emblem"],
			names: []
		},
		{
			code: "ae",
			continent: "Asia",
			country: "United Arab Emirates",
			colors: ["red","green","white","black"],
			shapes: [],
			names: []
		},
		{
			code: "af",
			continent: "Asia",
			country: "Afghanistan",
			colors: ["black","red","green","white"],
			shapes: ["triv","emblem"],
			names: []
		},
		{
			code: "ag",
			continent: "North America",
			country: "Antigua and Barbuda",
			colors: ["red","black","yellow","blue","white"],
			shapes: [],
			names: []
		},
		{
			code: "al",
			continent: "Europe",
			country: "Albania",
			colors: ["red","black"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "am",
			continent: "Asia",
			country: "Armenia",
			colors: ["red","blue","orange"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "ao",
			continent: "Africa",
			country: "Angola",
			colors: ["red","black","yellow"],
			shapes: ["bi","emblem","star"],
			names: []
		},
		{
			code: "ar",
			continent: "South America",
			country: "Argentina",
			colors: ["blue","white"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "at",
			continent: "Europe",
			country: "Austria",
			colors: ["red","white"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "au",
			continent: "Oceania",
			country: "Australia",
			colors: ["blue","red","white"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "az",
			continent: "Asia",
			country: "Azerbaijan",
			colors: ["blue","red","green","white"],
			shapes: ["trih","emblem","star"],
			names: []
		},
		{
			code: "ba",
			continent: "Europe",
			country: "Bosnia and Herzegovina",
			colors: ["blue","yellow","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "bb",
			continent: "North America",
			country: "Barbados",
			colors: ["blue","yellow"],
			shapes: ["triv","emblem"],
			names: []
		},
		{
			code: "bd",
			continent: "Asia",
			country: "Bangladesh",
			colors: ["green","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "be",
			continent: "Europe",
			country: "Belgium",
			colors: ["black","yellow","red"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "bf",
			continent: "Africa",
			country: "Burkina Faso",
			colors: ["red","green","yellow"],
			shapes: ["bi","emblem","star"],
			names: []
		},
		{
			code: "bg",
			continent: "Europe",
			country: "Bulgaria",
			colors: ["white","green","red"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "bh",
			continent: "Asia",
			country: "Bahrain",
			colors: ["white","red"],
			shapes: [],
			names: []
		},
		{
			code: "bi",
			continent: "Africa",
			country: "Burundi",
			colors: ["white","red","green"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "bj",
			continent: "Africa",
			country: "Benin",
			colors: ["green","yellow","red"],
			shapes: [],
			names: []
		},
		{
			code: "bn",
			continent: "Asia",
			country: "Brunei",
			colors: ["yellow","white","black","red"],
			shapes: ["diagonal","emblem"],
			names: []
		},
		{
			code: "bo",
			continent: "South America",
			country: "Bolivia",
			colors: ["red","yellow","green"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "br",
			continent: "South America",
			country: "Brazil",
			colors: ["green","yellow","blue"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "bs",
			continent: "North America",
			country: "Bahamas",
			colors: ["black","blue","yellow"],
			shapes: ["trih","triangle"],
			names: []
		},
		{
			code: "bt",
			continent: "Asia",
			country: "Bhutan",
			colors: ["yellow","orange","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "bw",
			continent: "Africa",
			country: "Botswana",
			colors: ["blue","white","black"],
			shapes: [],
			names: []
		},
		{
			code: "by",
			continent: "Europe",
			country: "Belarus",
			colors: ["red","green","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "bz",
			continent: "North America",
			country: "Belize",
			colors: ["red","blue","white","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ca",
			continent: "North America",
			country: "Canada",
			colors: ["red","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "cd",
			continent: "Africa",
			country: "Democratic Republic of the Congo",
			colors: ["blue","yellow","red"],
			shapes: ["diagonal","emblem","star"],
			names: []
		},
		{
			code: "cf",
			continent: "Africa",
			country: "Central African Republic",
			colors: ["blue","white","green","yellow","red"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "cg",
			continent: "Africa",
			country: "Congo",
			colors: ["green","yellow","red"],
			shapes: ["diagonal"],
			names: []
		},
		{
			code: "ch",
			continent: "Europe",
			country: "Switzerland",
			colors: ["red","white"],
			shapes: [],
			names: ["swiss"]
		},
		{
			code: "ci",
			continent: "Africa",
			country: "Ivory Coast",
			colors: ["orange","white","green"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "cl",
			continent: "South America",
			country: "Chile",
			colors: ["blue","white","red"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "cm",
			continent: "Africa",
			country: "Cameroon",
			colors: ["green","red","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "cn",
			continent: "Asia",
			country: "China",
			colors: ["red","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "co",
			continent: "South America",
			country: "Colombia",
			colors: ["yellow","blue","red"],
			shapes: [],
			names: []
		},
		{
			code: "cr",
			continent: "North America",
			country: "Costa Rica",
			colors: ["blue","white","red"],
			shapes: [],
			names: []
		},
		{
			code: "cu",
			continent: "North America",
			country: "Cuba",
			colors: ["red","blue","white"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "cv",
			continent: "Africa",
			country: "Cape Verde",
			colors: ["blue","white","red","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "cy",
			continent: "Asia",
			country: "Cyprus",
			colors: ["white","orange","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "cz",
			continent: "Europe",
			country: "Czech Republic",
			colors: ["blue","white","red"],
			shapes: ["triangle"],
			names: []
		},
		{
			code: "de",
			continent: "Europe",
			country: "Germany",
			colors: ["black","red","yello"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "dj",
			continent: "Africa",
			country: "Djibouti",
			colors: ["white","blue","green","red"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "dk",
			continent: "Europe",
			country: "Denmark",
			colors: ["red","white"],
			shapes: ["nordic"],
			names: []
		},
		{
			code: "dm",
			continent: "North America",
			country: "Dominica",
			colors: ["green","yellow","black","white","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "do",
			continent: "North America",
			country: "Dominican Republic",
			colors: ["blue","white","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "dz",
			continent: "Africa",
			country: "Algeria",
			colors: ["green","white","red"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "ec",
			continent: "South America",
			country: "Ecuador",
			colors: ["yellow","blue","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ee",
			continent: "Europe",
			country: "Estonia",
			colors: ["blue","black","white"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "eg",
			continent: "Africa",
			country: "Egypt",
			colors: ["red","white","black","yellow"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "eh",
			continent: "Africa",
			country: "Western Sahara",
			colors: ["red","black","white","green"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "er",
			continent: "Africa",
			country: "Eritrea",
			colors: ["red","green","blue","yellow"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "es",
			continent: "Europe",
			country: "Spain",
			colors: ["red","yellow"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "et",
			continent: "Africa",
			country: "Ethiopia",
			colors: ["green","yellow","red","blue"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "fi",
			continent: "Europe",
			country: "Finland",
			colors: ["white","blue"],
			shapes: ["nordic"],
			names: []
		},
		{
			code: "fj",
			continent: "Oceania",
			country: "Fiji",
			colors: ["blue","white","red"],
			shapes: ["canton","emblem"],
			names: []
		},
		{
			code: "fm",
			continent: "Oceania",
			country: "Micronesia",
			colors: ["blue","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "fr",
			continent: "Europe",
			country: "France",
			colors: ["blue","white","red"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "ga",
			continent: "Africa",
			country: "Gabon",
			colors: ["green","yellow","blue"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "gb",
			continent: "Europe",
			country: "United Kingdom",
			colors: ["red","white","blue"],
			shapes: [],
			names: ["UK"]
		},
		{
			code: "gd",
			continent: "North America",
			country: "Grenada",
			colors: ["red","yellow","green"],
			shapes: ["border","emblem","star"],
			names: []
		},
		{
			code: "ge",
			continent: "Asia",
			country: "Georgia",
			colors: ["white","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "gh",
			continent: "Africa",
			country: "Ghana",
			colors: ["red","yellow","green","black"],
			shapes: ["trih","emblem","star"],
			names: []
		},
		{
			code: "gm",
			continent: "Africa",
			country: "Gambia",
			colors: ["red","white","blue","green"],
			shapes: [],
			names: []
		},
		{
			code: "gn",
			continent: "Africa",
			country: "Guinea",
			colors: ["red","yellow","green"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "gq",
			continent: "Africa",
			country: "Equatorial Guinea",
			colors: ["blue","green","white","red"],
			shapes: ["triangle","emblem"],
			names: []
		},
		{
			code: "gr",
			continent: "Europe",
			country: "Greece",
			colors: ["blue","white"],
			shapes: ["canton"],
			names: []
		},
		{
			code: "gt",
			continent: "North America",
			country: "Guatemala",
			colors: ["blue","white"],
			shapes: ["triv","emblem"],
			names: []
		},
		{
			code: "gw",
			continent: "Africa",
			country: "Guinea-Bissau",
			colors: ["red","yellow","green","black"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "gy",
			continent: "South America",
			country: "Guyana",
			colors: ["red","black","yellow","white","green"],
			shapes: ["triangle"],
			names: []
		},
		{
			code: "hn",
			continent: "North America",
			country: "Honduras",
			colors: ["blue","white"],
			shapes: ["trih","emblem","star"],
			names: []
		},
		{
			code: "hr",
			continent: "Europe",
			country: "Croatia",
			colors: ["red","white","blue"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ht",
			continent: "North America",
			country: "Haiti",
			colors: ["blue","red"],
			shapes: ["bi","emblem"],
			names: []
		},
		{
			code: "hu",
			continent: "Europe",
			country: "Hungary",
			colors: ["red","white","green"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "id",
			continent: "Asia",
			country: "Indonesia",
			colors: ["red","white"],
			shapes: ["bi"],
			names: []
		},
		{
			code: "ie",
			continent: "Europe",
			country: "Ireland",
			colors: ["green","white","orange"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "il",
			continent: "Asia",
			country: "Israel",
			colors: ["white","blue"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "in",
			continent: "Asia",
			country: "India",
			colors: ["orange","white","green","blue"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "iq",
			continent: "Asia",
			country: "Iraq",
			colors: ["red","white","black","green"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "ir",
			continent: "Asia",
			country: "Iran",
			colors: ["green","white","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "is",
			continent: "Europe",
			country: "Iceland",
			colors: ["blue","white","red"],
			shapes: ["nordic"],
			names: []
		},
		{
			code: "it",
			continent: "Europe",
			country: "Italy",
			colors: ["green","white","red"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "jm",
			continent: "North America",
			country: "Jamaica",
			colors: ["yellow","green","black"],
			shapes: [],
			names: []
		},
		{
			code: "jo",
			continent: "Asia",
			country: "Jordan",
			colors: ["red","black","white","green"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "jp",
			continent: "Asia",
			country: "Japan",
			colors: ["white","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ke",
			continent: "Africa",
			country: "Kenya",
			colors: ["black","white","red","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "kg",
			continent: "Asia",
			country: "Kyrgyzstan",
			colors: ["red","yello"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "kh",
			continent: "Asia",
			country: "Cambodia",
			colors: ["blue","red","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ki",
			continent: "Oceania",
			country: "Kiribati",
			colors: ["red","yellow","white","blue"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "km",
			continent: "Africa",
			country: "Comoros",
			colors: ["green","yellow","white","red","blue"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "kn",
			continent: "North America",
			country: "Saint Kitts and Nevis",
			colors: ["green","yellow","black","white","red"],
			shapes: ["diagonal","emblem","star"],
			names: []
		},
		{
			code: "kp",
			continent: "Asia",
			country: "North Korea",
			colors: ["blue","white","red"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "kr",
			continent: "Asia",
			country: "South Korea",
			colors: ["white","black","red","blue"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ks",
			continent: "Europe",
			country: "Kosovo",
			colors: ["blue","white","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "kw",
			continent: "Asia",
			country: "Kuwait",
			colors: ["black","green","white","red"],
			shapes: [],
			names: []
		},
		{
			code: "kz",
			continent: "Asia",
			country: "Kazakhstan",
			colors: ["blue","yellow"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "la",
			continent: "Asia",
			country: "Laos",
			colors: ["red","blue","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "lb",
			continent: "Asia",
			country: "Lebanon",
			colors: ["orange","white","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "lc",
			continent: "North America",
			country: "Saint Lucia",
			colors: ["blue","white","black","yellow"],
			shapes: [],
			names: []
		},
		{
			code: "li",
			continent: "Europe",
			country: "Liechtenstein",
			colors: ["blue","red","yello"],
			shapes: ["bi","emblem"],
			names: []
		},
		{
			code: "lk",
			continent: "Asia",
			country: "Sri Lanka",
			colors: ["yellow","green","orange","maroon"],
			shapes: ["border","emblem"],
			names: []
		},
		{
			code: "lr",
			continent: "Africa",
			country: "Liberia",
			colors: ["blue","red","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "ls",
			continent: "Africa",
			country: "Lesotho",
			colors: ["blue","white","green","black"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "lt",
			continent: "Europe",
			country: "Lithuania",
			colors: ["yellow","green","red"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "lu",
			continent: "Europe",
			country: "Luxembourg",
			colors: ["red","white","blue"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "lv",
			continent: "Europe",
			country: "Latvia",
			colors: ["red","white"],
			shapes: [],
			names: []
		},
		{
			code: "ly",
			continent: "Africa",
			country: "Libya",
			colors: ["red","black","green","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "ma",
			continent: "Africa",
			country: "Morocco",
			colors: ["red","green"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "mc",
			continent: "Europe",
			country: "Monaco",
			colors: ["red","white"],
			shapes: ["bi"],
			names: []
		},
		{
			code: "md",
			continent: "Europe",
			country: "Moldova",
			colors: ["blue","yellow","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "me",
			continent: "Europe",
			country: "Montenegro",
			colors: ["yellow","red"],
			shapes: ["border","emblem"],
			names: []
		},
		{
			code: "mg",
			continent: "Africa",
			country: "Madagascar",
			colors: ["white","red","green"],
			shapes: [],
			names: []
		},
		{
			code: "mh",
			continent: "Oceania",
			country: "Marshall Islands",
			colors: ["blue","white","orange"],
			shapes: ["diagonal","emblem"],
			names: []
		},
		{
			code: "mk",
			continent: "Europe",
			country: "Macedonia",
			colors: ["yellow","red"],
			shapes: [],
			names: []
		},
		{
			code: "ml",
			continent: "Africa",
			country: "Mali",
			colors: ["green","yellow","red"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "mm",
			continent: "Asia",
			country: "Myanmar",
			colors: ["blue","white","red"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "mn",
			continent: "Asia",
			country: "Mongolia",
			colors: ["red","blue","yellow"],
			shapes: ["triv","emblem"],
			names: []
		},
		{
			code: "mr",
			continent: "Africa",
			country: "Mauritania",
			colors: ["green","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "mt",
			continent: "Europe",
			country: "Malta",
			colors: ["white","red"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "mu",
			continent: "Africa",
			country: "Mauritius",
			colors: ["red","blue","yellow","green"],
			shapes: [],
			names: []
		},
		{
			code: "mv",
			continent: "Asia",
			country: "Maldives",
			colors: ["red","green","white"],
			shapes: ["border","emblem"],
			names: []
		},
		{
			code: "mw",
			continent: "Africa",
			country: "Malawi",
			colors: ["black","red","green"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "mx",
			continent: "North America",
			country: "Mexico",
			colors: ["green","white","red"],
			shapes: ["triv","emblem"],
			names: []
		},
		{
			code: "my",
			continent: "Asia",
			country: "Malaysia",
			colors: ["blue","yellow","red","white"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "mz",
			continent: "Africa",
			country: "Mozambique",
			colors: ["red","green","white","black","yellow"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "na",
			continent: "Africa",
			country: "Namibia",
			colors: ["blue","yellow","white","red","green"],
			shapes: ["diagonal","emblem"],
			names: []
		},
		{
			code: "ne",
			continent: "Africa",
			country: "Niger",
			colors: ["orange","white","green"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "ng",
			continent: "Africa",
			country: "Nigeria",
			colors: ["green","white"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "ni",
			continent: "North America",
			country: "Nicaragua",
			colors: ["blue","white"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "nl",
			continent: "Europe",
			country: "Netherlands",
			colors: ["red","white","blue"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "no",
			continent: "Europe",
			country: "Norway",
			colors: ["red","white","blue"],
			shapes: ["nordic"],
			names: []
		},
		{
			code: "np",
			continent: "Asia",
			country: "Nepal",
			colors: ["blue","red","white"],
			shapes: ["border","emblem"],
			names: []
		},
		{
			code: "nr",
			continent: "Oceania",
			country: "Nauru",
			colors: ["blue","yellow","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "nz",
			continent: "Oceania",
			country: "New Zealand",
			colors: ["blue","red","white"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "om",
			continent: "Asia",
			country: "Oman",
			colors: ["red","white","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "pa",
			continent: "North America",
			country: "Panama",
			colors: ["white","red","blue"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "pe",
			continent: "South America",
			country: "Peru",
			colors: ["red","white"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "pg",
			continent: "Oceania",
			country: "Papua New Guinea",
			colors: ["black","red","white","yellow"],
			shapes: ["diagonal","emblem","star"],
			names: []
		},
		{
			code: "ph",
			continent: "Asia",
			country: "Philippines",
			colors: ["white","blue","red","yellow"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "pk",
			continent: "Asia",
			country: "Pakistan",
			colors: ["white","green"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "pl",
			continent: "Europe",
			country: "Poland",
			colors: ["white","red"],
			shapes: ["bi"],
			names: []
		},
		{
			code: "pt",
			continent: "Europe",
			country: "Portugal",
			colors: ["green","red","yellow"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "pw",
			continent: "Oceania",
			country: "Palau",
			colors: ["blue","yellow"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "py",
			continent: "South America",
			country: "Paraguay",
			colors: ["red","white","blue"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "qa",
			continent: "Asia",
			country: "Qatar",
			colors: ["white","maroon"],
			shapes: [],
			names: []
		},
		{
			code: "ro",
			continent: "Europe",
			country: "Romania",
			colors: ["blue","yellow","red"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "rs",
			continent: "Europe",
			country: "Serbia",
			colors: ["red","blue","white"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "ru",
			continent: "Europe",
			country: "Russia",
			colors: ["white","blue","red"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "rw",
			continent: "Africa",
			country: "Rwanda",
			colors: ["blue","yellow","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "sa",
			continent: "Asia",
			country: "Saudi Arabia",
			colors: ["green","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "sb",
			continent: "Oceania",
			country: "Solomon Islands",
			colors: ["blue","white","yellow","green"],
			shapes: ["diagonal","emblem","star"],
			names: []
		},
		{
			code: "sc",
			continent: "Africa",
			country: "Seychelles",
			colors: ["blue","yellow","red","white","green"],
			shapes: [],
			names: []
		},
		{
			code: "sd",
			continent: "Africa",
			country: "Sudan",
			colors: ["green","red","white","black"],
			shapes: ["triangle"],
			names: []
		},
		{
			code: "se",
			continent: "Europe",
			country: "Sweden",
			colors: ["blue","yellow"],
			shapes: ["nordic"],
			names: []
		},
		{
			code: "sg",
			continent: "Asia",
			country: "Singapore",
			colors: ["red","white"],
			shapes: ["bi","emblem","star"],
			names: []
		},
		{
			code: "si",
			continent: "Europe",
			country: "Slovenia",
			colors: ["white","blue","red"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "sk",
			continent: "Europe",
			country: "Slovakia",
			colors: ["white","blue","red"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "sl",
			continent: "Africa",
			country: "Sierra Leone",
			colors: ["green","white","blue"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "sm",
			continent: "Europe",
			country: "San Marino",
			colors: ["white","blue"],
			shapes: ["bi","emblem"],
			names: []
		},
		{
			code: "sn",
			continent: "Africa",
			country: "Senegal",
			colors: ["green","yellow","red"],
			shapes: ["triv","emblem","star"],
			names: []
		},
		{
			code: "so",
			continent: "Africa",
			country: "Somalia",
			colors: ["blue","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "sr",
			continent: "South America",
			country: "Suriname",
			colors: ["green","white","red","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "ss",
			continent: "Africa",
			country: "South Sudan",
			colors: ["blue","yellow","black","white","red","green"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "st",
			continent: "Africa",
			country: "Sao Tome and Principe",
			colors: ["red","green","yellow","black"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "sv",
			continent: "North America",
			country: "El Salvador",
			colors: ["blue","white"],
			shapes: ["trih","emblem"],
			names: []
		},
		{
			code: "sy",
			continent: "Asia",
			country: "Syria",
			colors: ["red","white","black","green"],
			shapes: ["trih","emblem","star"],
			names: []
		},
		{
			code: "sz",
			continent: "Africa",
			country: "Swaziland",
			colors: ["blue","yellow","red","black","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "td",
			continent: "Africa",
			country: "Chad",
			colors: ["blue","yellow","red"],
			shapes: ["triv"],
			names: []
		},
		{
			code: "tg",
			continent: "Africa",
			country: "Togo",
			colors: ["red","white","green","yellow"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "th",
			continent: "Asia",
			country: "Thailand",
			colors: ["red","white","blue"],
			shapes: [],
			names: []
		},
		{
			code: "tj",
			continent: "Asia",
			country: "Tajikistan",
			colors: ["red","white","green","yellow"],
			shapes: [],
			names: []
		},
		{
			code: "tl",
			continent: "Asia",
			country: "East Timor",
			colors: ["black","white","yellow","red"],
			shapes: ["triangle","emblem","star"],
			names: []
		},
		{
			code: "tm",
			continent: "Asia",
			country: "Turkmenistan",
			colors: ["green","red","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "tn",
			continent: "Africa",
			country: "Tunisia",
			colors: ["red","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "to",
			continent: "Oceania",
			country: "Tonga",
			colors: ["white","red"],
			shapes: ["canton","emblem"],
			names: []
		},
		{
			code: "tr",
			continent: "Asia",
			country: "Turkey",
			colors: ["red","white"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "tt",
			continent: "North America",
			country: "Trinidad and Tobago",
			colors: ["red","white","black"],
			shapes: ["diagonal"],
			names: []
		},
		{
			code: "tv",
			continent: "Oceania",
			country: "Tuvalu",
			colors: ["blue","white","red","yellow"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "tw",
			continent: "Asia",
			country: "Taiwan",
			colors: ["blue","white","red"],
			shapes: ["canton","emblem"],
			names: []
		},
		{
			code: "tz",
			continent: "Africa",
			country: "Tanzania",
			colors: ["green","yellow","black","blue"],
			shapes: ["diagonal"],
			names: []
		},
		{
			code: "ua",
			continent: "Europe",
			country: "Ukraine",
			colors: ["blue","yellow"],
			shapes: ["bi"],
			names: []
		},
		{
			code: "ug",
			continent: "Africa",
			country: "Uganda",
			colors: ["black","yellow","red","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "us",
			continent: "North America",
			country: "United States of America",
			colors: ["blue","red","white"],
			shapes: ["canton","emblem","star"],
			names: ["USA"]
		},
		{
			code: "uy",
			continent: "South America",
			country: "Uruguay",
			colors: ["white","blue","yellow"],
			shapes: ["canton","emblem"],
			names: []
		},
		{
			code: "uz",
			continent: "Asia",
			country: "Uzbekistan",
			colors: ["blue","red","white","green"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "va",
			continent: "Europe",
			country: "Vatican City",
			colors: ["yellow","white"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "vc",
			continent: "North America",
			country: "Saint Vincent and the Grenadines",
			colors: ["blue","yellow","green"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "ve",
			continent: "South America",
			country: "Venezuela",
			colors: ["yellow","blue","red"],
			shapes: ["trih","emblem","star"],
			names: []
		},
		{
			code: "vn",
			continent: "Asia",
			country: "Vietnam",
			colors: ["red","yellow"],
			shapes: ["emblem","star"],
			names: []
		},
		{
			code: "vu",
			continent: "Oceania",
			country: "Vanuatu",
			colors: ["black","yellow","red","green"],
			shapes: ["triangle","emblem"],
			names: []
		},
		{
			code: "ws",
			continent: "Oceania",
			country: "Samoa",
			colors: ["blue","red","white"],
			shapes: ["canton","emblem","star"],
			names: []
		},
		{
			code: "ye",
			continent: "Asia",
			country: "Yemen",
			colors: ["red","white","black"],
			shapes: ["trih"],
			names: []
		},
		{
			code: "za",
			continent: "Africa",
			country: "South Africa",
			colors: ["black","yellow","green","white","red","blue"],
			shapes: ["triangle"],
			names: []
		},
		{
			code: "zm",
			continent: "Africa",
			country: "Zambia",
			colors: ["green","red","black","orange"],
			shapes: ["emblem"],
			names: []
		},
		{
			code: "zw",
			continent: "Africa",
			country: "Zimbabwe",
			colors: ["white","green","yellow","red","black"],
			shapes: ["triangle","emblem","star"],
			names: []
		}
	];
}
