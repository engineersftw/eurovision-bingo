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
	"10X Developer",
	"2.5G",
	"2G",
	"4G",
	"5G",
	"A/B Testing",
	"Accelerator Program",
	"Access Basic",
	"AJAX",
	"Alpine Linux",
	"AltaVista",
	"Android",
	"Angular",
	"anime",
	"Anti-Virus",
	"Apple",
	"Archlinux",
	"Arduino",
	"Artifical Intelligence",
	"ASCII Art",
	"Augmented Reality",
	"Azure",
	"Basecamp",
	"Big Data",
	"Bitbucket",
	"Blackberry",
	"Blockchain Geek",
	"Bootstrap",
	"Bootstrap",
	"Botnet",
	"Brave Browser",
	"C",
	"C#",
	"C++",
	"CakePHP",
	"Cascading Style Sheets",
	"CentOS",
	"Chatbots",
	"Chrome",
	"Cirlce CI",
	"Climbing",
	"Clippy",
	"Cloud Computing",
	"Co-working Space",
	"Containers",
	"CQRS",
	"Cycling",
	"Data Analytics",
	"Data Mining",
	"Data privacy"
	"Data Science",
	"Design Patterns",
	"DevOps",
	"DevSecOps",
	"Dribbble",
	"Duck Duck Go",
	"Electronic Dance Music",
	"Elixir",
	"EMACS",
	"Erlang",
	"ESP8266",
	"Express",
	"Facial recognition",
	"Firefox",
	"First Person Shooter",
	"Flask",
	"Flickr",
	"Flow",
	"Friendster",
	"FTP",
	"Git",
	"GitHub",
	"Gitlab",
	"Go Lang",
	"Google Wave",
	"Google",
	"GraphQL",
	"HackerspaceSG",
	"Harry Potter",
	"HATEOAS",
	"HTML",
	"Hudson",
	"ICQ",
	"Infoseek",
	"Internet of Things",
	"IPv6",
	"IRC",
	"Jabber",
	"Jasmine",
	"Java",
	"JavaScript",
	"Jenkins CI",
	"JUnit",
	"K-Pop",
	"Karaoke",
	"Kubernetes",
	"Laravel",
	"lighttpd"
	"Lycos",
	"Machine Learning",
	"MacOS",
	"Material UI",
	"Mentoring Programs",
	"Microsoft Office",
	"Mid Career Switcher",
	"MiniTest",
	"Mocha",
	"Moore's Law",
	"MooTools",
	"MSN Messenger",
	"Murphy's Law",
	"MySQL",
	"Net Neutrality",
	"Next Billion User",
	"nginx",
	"Nintendo DS",
	"Nintendo Switch",
	"Nokia 3210",
	"OpenShift",
	"Opera browser",
	"Orkut",
	"PalmOS",
	"Phoenix",
	"PHP",
	"PHPUnit",
	"Pokemon",
	"Postgres SQL",
	"Prototype",
	"Python",
	"Quantum Computing",
	"Raspberry Pi",
	"React Native",
	"React",
	"ROFL",
	"RSpec",
	"RTFM",
	"Ruby on Rails",
	"Scala",
	"Sega 16-Bit",
	"Shenzhen",
	"Slack",
	"Smart Contracts",
	"SNES",
	"Sublime Text",
	"Sun Microsystems",
	"Super heros",
	"SymbianOS",
	"Tech Startup",
	"Tensorflow",
	"Tor",
	"Travis CI",
	"Trello",
	"TypeScript",
	"Ubuntu",
	"Unicorn",
	"User Experience Design",
	"User Interface Design",
	"VI",
	"VIM",
	"Virtual Reality",
	"Visual Basic for Applications",
	"Visual Basic",
	"Wearable Tech",
	"Windows 95",
	"Windows ME",
	"Windows XP",
	"Windows",
	"WordPress",
	"XML",
	"XUnit",
	"Yahoo!",
	"Zendesk",
	"Zopim",
	"😀",
	"😎",
	"🤓",
]
