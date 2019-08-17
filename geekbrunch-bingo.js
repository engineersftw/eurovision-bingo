function random_range(lower, upper) {
	return lower + Math.floor((upper - lower) * Math.random());
}

function extract_random_element(array_) {
	index = random_range(0, array_.length);
	return array_.splice(index, 1)[0];
}

var VERSION = "v2";

onLoad = function() {
	cells = document.querySelectorAll("td");

	// Load and store state in local storage
	state = localStorage.getItem(VERSION);
	if (!state) {
		tropes = [];
		trope_indexes = [];
		all_tropes.forEach(function (_, i) {
			trope_indexes.push(i);
		});
		for (var i = 0; i < cells.length; i++) {
			// Randomize content
			tropes.push(extract_random_element(trope_indexes));
		}
		state = {
			"tropes": tropes,
			"checked": []
		}
		localStorage.setItem(VERSION, JSON.stringify(state));
	} else {
		state = JSON.parse(state);
		for (var i = 0; i < cells.length; i++) {
			if (state.checked[i]) {
				cells[i].classList.add("checked");
			}
		}
	}

	state.tropes.forEach(function(_, i) {
		cells[i].textContent = all_tropes[state.tropes[i]];
		// Set up click listener to toggle "checked" class on target element
		cells[i].addEventListener("click", function (event) {
			event.currentTarget.classList.toggle("checked");
			state.checked[i] = event.currentTarget.classList.contains("checked");
			localStorage.setItem(VERSION, JSON.stringify(state));
			ga('send', 'event',
				'Cell',
				event.currentTarget.classList.contains("checked") ? 'check' : 'uncheck',
				event.currentTarget.textContent);
		});
	});

	document.querySelector("#reset").addEventListener("click", function(event) {
		localStorage.clear();
		location.reload();
		ga('send', 'event',
			'Reset');
	});
};

document.addEventListener('DOMContentLoaded', onLoad, false);

all_tropes = [
	"Artifical Intelligence",
	"Big Data",
	"Data Science",
	"Blockchain Geek",
	"Smart Contracts",
	"PHP",
	"Cascading Style Sheets",
	"HTML",
	"Bootstrap",
	"Raspberry Pi",
	"Arduino",
	"ESP8266",
	"Shenzhen",
	"HackerspaceSG",
	"Co-working Space",
	"Mentoring Programs",
	"Tech Startup",
	"Accelerator Program",
	"JavaScript",
	"DevOps",
	"Containers",
	"Kubernetes",
	"DevSecOps",
	"Design Patterns",
	"User Experience Design",
	"User Interface Design",
	"Chrome",
	"Firefox",
	"Python",
	"Tensorflow",
	"Opera browser",
	"Brave Browser",
	"Duck Duck Go",
	"Tor",
	"IPv6",
	"WordPress",
	"Scala",
	"Java",
	"K-Pop",
	"Electronic Dance Music",
	"A/B Testing",
	"Internet of Things",
	"Wearable Tech",
	"Virtual Reality",
	"Augmented Reality",
	"Net Neutrality",
	"Data Mining",
	"Machine Learning",
	"Unicorn",
	"Apple",
	"Android",
	"Next Billion User",
	"5G",
	"4G",
	"2G",
	"2.5G",
	"Super heros",
	"10X Developer",
	"Cycling",
	"Climbing",
	"Chatbots",
	"Quantum Computing",
	"Cloud Computing",
	"First Person Shooter",
	"Botnet",
	"Anti-Virus",
	"Windows",
	"MacOS",
	"Archlinux",
	"Alpine Linux",
	"Ubuntu",
	"CentOS",
	"Trello",
	"Basecamp",
	"Ruby on Rails",
	"Elixir",
	"Erlang",
	"C",
	"C++",
	"C#",
	"Visual Basic",
	"Access Basic",
	"Visual Basic for Applications",
	"Microsoft Office",
	"Azure",
	"OpenShift",
	"Git",
	"GitHub",
	"Bitbucket",
	"Gitlab",
	"Travis CI",
	"Jenkins CI",
	"Cirlce CI",
	"Hudson",
	"Phoenix",
	"CakePHP",
	"Laravel",
	"Flask",
	"Mocha",
	"Jasmine",
	"RSpec",
	"XUnit",
	"JUnit",
	"PHPUnit",
	"MiniTest",
	"Bootstrap",
	"Material UI",
	"GraphQL",
	"HATEOAS",
	"CQRS",
	"React",
	"React Native",
	"Angular",
	"MooTools",
	"Prototype",
	"TypeScript",
	"Flow",
	"Jabber",
	"Dribbble",
	"Yahoo!",
	"AltaVista",
	"Lycos",
	"Infoseek",
	"Google",
	"ASCII Art",
	"😀",
	"ROFL",
	"🤓",
	"😎",
	"Mid Career Switcher",
	"RTFM",
	"Moore's Law",
	"Murphy's Law",
	"AJAX",
	"XML",
	"Go Lang",
	"Express",
	"MySQL",
	"Postgres SQL",
	"Sun Microsystems",
	"Clippy",
	"FTP",
	"IRC",
	"ICQ",
	"MSN Messenger",
	"Orkut",
	"Google Wave",
	"Sublime Text",
	"VIM",
	"VI",
	"EMACS",
	"Windows XP",
	"Windows ME",
	"Windows 95",
	"PalmOS",
	"SymbianOS",
	"Nokia 3210",
	"Blackberry",
	"Friendster",
	"Flickr",
	"SNES",
	"Sega 16-Bit",
	"Pokemon",
	"Nintendo DS",
	"Nintendo Switch",
	"Karaoke",
	"Data Analytics",
]
