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
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ao",
			continent: "Africa",
			country: "Angola",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ar",
			continent: "South America",
			country: "Argentina",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "at",
			continent: "Europe",
			country: "Austria",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "au",
			continent: "Oceania",
			country: "Australia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "az",
			continent: "Asia",
			country: "Azerbaijan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ba",
			continent: "Europe",
			country: "Bosnia and Herzegovina",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bb",
			continent: "North America",
			country: "Barbados",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bd",
			continent: "Asia",
			country: "Bangladesh",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "be",
			continent: "Europe",
			country: "Belgium",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bf",
			continent: "Africa",
			country: "Burkina Faso",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bg",
			continent: "Europe",
			country: "Bulgaria",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bh",
			continent: "Asia",
			country: "Bahrain",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bi",
			continent: "Africa",
			country: "Burundi",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bj",
			continent: "Africa",
			country: "Benin",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bn",
			continent: "Asia",
			country: "Brunei",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bo",
			continent: "South America",
			country: "Bolivia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "br",
			continent: "South America",
			country: "Brazil",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bs",
			continent: "North America",
			country: "Bahamas",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bt",
			continent: "Asia",
			country: "Bhutan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bw",
			continent: "Africa",
			country: "Botswana",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "by",
			continent: "Europe",
			country: "Belarus",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "bz",
			continent: "North America",
			country: "Belize",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ca",
			continent: "North America",
			country: "Canada",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cd",
			continent: "Africa",
			country: "Democratic Republic of the Congo",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cf",
			continent: "Africa",
			country: "Central African Republic",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cg",
			continent: "Africa",
			country: "Congo",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ch",
			continent: "Europe",
			country: "Switzerland",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ci",
			continent: "Africa",
			country: "Ivory Coast",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cl",
			continent: "South America",
			country: "Chile",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cm",
			continent: "Africa",
			country: "Cameroon",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cn",
			continent: "Asia",
			country: "China",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "co",
			continent: "South America",
			country: "Colombia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cr",
			continent: "North America",
			country: "Costa Rica",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cu",
			continent: "North America",
			country: "Cuba",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cv",
			continent: "Africa",
			country: "Cape Verde",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cy",
			continent: "Asia",
			country: "Cyprus",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "cz",
			continent: "Europe",
			country: "Czech Republic",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "de",
			continent: "Europe",
			country: "Germany",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "dj",
			continent: "Africa",
			country: "Djibouti",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "dk",
			continent: "Europe",
			country: "Denmark",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "dm",
			continent: "North America",
			country: "Dominica",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "do",
			continent: "North America",
			country: "Dominican Republic",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "dz",
			continent: "Africa",
			country: "Algeria",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ec",
			continent: "South America",
			country: "Ecuador",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ee",
			continent: "Europe",
			country: "Estonia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "eg",
			continent: "Africa",
			country: "Egypt",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "eh",
			continent: "Africa",
			country: "Western Sahara",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "er",
			continent: "Africa",
			country: "Eritrea",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "es",
			continent: "Europe",
			country: "Spain",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "et",
			continent: "Africa",
			country: "Ethiopia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "fi",
			continent: "Europe",
			country: "Finland",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "fj",
			continent: "Oceania",
			country: "Fiji",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "fm",
			continent: "Oceania",
			country: "Micronesia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "fr",
			continent: "Europe",
			country: "France",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ga",
			continent: "Africa",
			country: "Gabon",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gb",
			continent: "Europe",
			country: "United Kingdom",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gd",
			continent: "North America",
			country: "Grenada",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ge",
			continent: "Asia",
			country: "Georgia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gh",
			continent: "Africa",
			country: "Ghana",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gm",
			continent: "Africa",
			country: "Gambia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gn",
			continent: "Africa",
			country: "Guinea",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gq",
			continent: "Africa",
			country: "Equatorial Guinea",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gr",
			continent: "Europe",
			country: "Greece",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gt",
			continent: "North America",
			country: "Guatemala",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gw",
			continent: "Africa",
			country: "Guinea-Bissau",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "gy",
			continent: "South America",
			country: "Guyana",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "hn",
			continent: "North America",
			country: "Honduras",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "hr",
			continent: "Europe",
			country: "Croatia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ht",
			continent: "North America",
			country: "Haiti",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "hu",
			continent: "Europe",
			country: "Hungary",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "id",
			continent: "Asia",
			country: "Indonesia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ie",
			continent: "Europe",
			country: "Ireland",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "il",
			continent: "Asia",
			country: "Israel",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "in",
			continent: "Asia",
			country: "India",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "iq",
			continent: "Asia",
			country: "Iraq",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ir",
			continent: "Asia",
			country: "Iran",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "is",
			continent: "Europe",
			country: "Iceland",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "it",
			continent: "Europe",
			country: "Italy",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "jm",
			continent: "North America",
			country: "Jamaica",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "jo",
			continent: "Asia",
			country: "Jordan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "jp",
			continent: "Asia",
			country: "Japan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ke",
			continent: "Africa",
			country: "Kenya",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kg",
			continent: "Asia",
			country: "Kyrgyzstan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kh",
			continent: "Asia",
			country: "Cambodia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ki",
			continent: "Oceania",
			country: "Kiribati",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "km",
			continent: "Africa",
			country: "Comoros",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kn",
			continent: "North America",
			country: "Saint Kitts and Nevis",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kp",
			continent: "Asia",
			country: "North Korea",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kr",
			continent: "Asia",
			country: "South Korea",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ks",
			continent: "Europe",
			country: "Kosovo",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kw",
			continent: "Asia",
			country: "Kuwait",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "kz",
			continent: "Asia",
			country: "Kazakhstan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "la",
			continent: "Asia",
			country: "Laos",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lb",
			continent: "Asia",
			country: "Lebanon",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lc",
			continent: "North America",
			country: "Saint Lucia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "li",
			continent: "Europe",
			country: "Liechtenstein",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lk",
			continent: "Asia",
			country: "Sri Lanka",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lr",
			continent: "Africa",
			country: "Liberia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ls",
			continent: "Africa",
			country: "Lesotho",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lt",
			continent: "Europe",
			country: "Lithuania",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lu",
			continent: "Europe",
			country: "Luxembourg",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "lv",
			continent: "Europe",
			country: "Latvia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ly",
			continent: "Africa",
			country: "Libya",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ma",
			continent: "Africa",
			country: "Morocco",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mc",
			continent: "Europe",
			country: "Monaco",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "md",
			continent: "Europe",
			country: "Moldova",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "me",
			continent: "Europe",
			country: "Montenegro",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mg",
			continent: "Africa",
			country: "Madagascar",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mh",
			continent: "Oceania",
			country: "Marshall Islands",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mk",
			continent: "Europe",
			country: "Macedonia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ml",
			continent: "Africa",
			country: "Mali",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mm",
			continent: "Asia",
			country: "Myanmar",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mn",
			continent: "Asia",
			country: "Mongolia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mr",
			continent: "Africa",
			country: "Mauritania",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mt",
			continent: "Europe",
			country: "Malta",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mu",
			continent: "Africa",
			country: "Mauritius",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mv",
			continent: "Asia",
			country: "Maldives",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mw",
			continent: "Africa",
			country: "Malawi",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mx",
			continent: "North America",
			country: "Mexico",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "my",
			continent: "Asia",
			country: "Malaysia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "mz",
			continent: "Africa",
			country: "Mozambique",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "na",
			continent: "Africa",
			country: "Namibia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ne",
			continent: "Africa",
			country: "Niger",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ng",
			continent: "Africa",
			country: "Nigeria",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ni",
			continent: "North America",
			country: "Nicaragua",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "nl",
			continent: "Europe",
			country: "Netherlands",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "no",
			continent: "Europe",
			country: "Norway",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "np",
			continent: "Asia",
			country: "Nepal",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "nr",
			continent: "Oceania",
			country: "Nauru",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "nz",
			continent: "Oceania",
			country: "New Zealand",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "om",
			continent: "Asia",
			country: "Oman",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pa",
			continent: "North America",
			country: "Panama",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pe",
			continent: "South America",
			country: "Peru",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pg",
			continent: "Oceania",
			country: "Papua New Guinea",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ph",
			continent: "Asia",
			country: "Philippines",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pk",
			continent: "Asia",
			country: "Pakistan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pl",
			continent: "Europe",
			country: "Poland",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pt",
			continent: "Europe",
			country: "Portugal",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "pw",
			continent: "Oceania",
			country: "Palau",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "py",
			continent: "South America",
			country: "Paraguay",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "qa",
			continent: "Asia",
			country: "Qatar",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ro",
			continent: "Europe",
			country: "Romania",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "rs",
			continent: "Europe",
			country: "Serbia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ru",
			continent: "Europe",
			country: "Russia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "rw",
			continent: "Africa",
			country: "Rwanda",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sa",
			continent: "Asia",
			country: "Saudi Arabia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sb",
			continent: "Oceania",
			country: "Solomon Islands",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sc",
			continent: "Africa",
			country: "Seychelles",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sd",
			continent: "Africa",
			country: "Sudan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "se",
			continent: "Europe",
			country: "Sweden",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sg",
			continent: "Asia",
			country: "Singapore",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "si",
			continent: "Europe",
			country: "Slovenia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sk",
			continent: "Europe",
			country: "Slovakia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sl",
			continent: "Africa",
			country: "Sierra Leone",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sm",
			continent: "Europe",
			country: "San Marino",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sn",
			continent: "Africa",
			country: "Senegal",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "so",
			continent: "Africa",
			country: "Somalia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sr",
			continent: "South America",
			country: "Suriname",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ss",
			continent: "Africa",
			country: "South Sudan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "st",
			continent: "Africa",
			country: "Sao Tome and Principe",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sv",
			continent: "North America",
			country: "El Salvador",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sy",
			continent: "Asia",
			country: "Syria",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "sz",
			continent: "Africa",
			country: "Swaziland",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "td",
			continent: "Africa",
			country: "Chad",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tg",
			continent: "Africa",
			country: "Togo",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "th",
			continent: "Asia",
			country: "Thailand",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tj",
			continent: "Asia",
			country: "Tajikistan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tl",
			continent: "Asia",
			country: "East Timor",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tm",
			continent: "Asia",
			country: "Turkmenistan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tn",
			continent: "Africa",
			country: "Tunisia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "to",
			continent: "Oceania",
			country: "Tonga",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tr",
			continent: "Asia",
			country: "Turkey",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tt",
			continent: "North America",
			country: "Trinidad and Tobago",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tv",
			continent: "Oceania",
			country: "Tuvalu",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tw",
			continent: "Asia",
			country: "Taiwan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "tz",
			continent: "Africa",
			country: "Tanzania",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ua",
			continent: "Europe",
			country: "Ukraine",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ug",
			continent: "Africa",
			country: "Uganda",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "us",
			continent: "North America",
			country: "United States of America",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "uy",
			continent: "South America",
			country: "Uruguay",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "uz",
			continent: "Asia",
			country: "Uzbekistan",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "va",
			continent: "Europe",
			country: "Vatican City",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "vc",
			continent: "North America",
			country: "Saint Vincent and the Grenadines",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ve",
			continent: "South America",
			country: "Venezuela",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "vn",
			continent: "Asia",
			country: "Vietnam",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "vu",
			continent: "Oceania",
			country: "Vanuatu",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ws",
			continent: "Oceania",
			country: "Samoa",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "ye",
			continent: "Asia",
			country: "Yemen",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "za",
			continent: "Africa",
			country: "South Africa",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "zm",
			continent: "Africa",
			country: "Zambia",
			colors: [],
			shapes: [],
			names: []
		},
		{
			code: "zw",
			continent: "Africa",
			country: "Zimbabwe",
			colors: [],
			shapes: [],
			names: []
		}
	];
}
