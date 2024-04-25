const Path = location.origin == "http://localhost" ? "docs/api/" : "fascinoTS/api/";
function loadMain(url) {
	let Main = _$("#main")
	Main.html("")
	Main.load(url + ".md")
		.finally((res) => {
			// PRE
			Prism.highlightAll()
			// NAV
			_$("ul", Main.first).addClass("nav", "flex-column")
			_$("li", Main.first).addClass("nav-item")
			_$("a", Main.first).each((a) => {
				_$(a).attr("href", _$.replace(a.href, "wiki/", Path))
				if (_$(a).parent().first.nodeName == "LI") {
					_$(a).addClass("nav-link")
				}
				let u = new URL(a.href)
				if (u.origin !== location.origin) {
					_$(a).attr("target", "_blank")
					_$(a).append("<i class='bi-link-45deg ms-1'></i>")
				}
			}).click(function(e) {
				e.preventDefault()
				loadMain(this.href)
			})
			// Code
			_$(".toolbar-item span").addClass("badge","border-0","me-1","p-2","rounded-0")
			_$(".copy-to-clipboard-button").addClass("btn","btn-sm","p-2")
			_$(".copy-to-clipboard-button span").addClass("visually-hidden")
			_$(".copy-to-clipboard-button").each((btn) => {
				if (_$("i", btn).length == 0) {
					_$(btn).append("<i class='bi-copy'></i>")
				}
			})
			_$("pre", Main.first).addClass("shadow")
			// Table
			_$("table", Main.first).addClass("table", "table-striped", "table-hover")
		})
}
_$(() => {
	// Carga el DOM
	let sidebar = _$("#sidebar nav")
	loadMain("api/Home")
	sidebar.load("api/Exports.md")
		.finally((res) => {
			_$("ul", sidebar.first).addClass("nav", "flex-column")
			_$("li", sidebar.first).addClass("nav-item")
			_$("li a", sidebar.first).each((a) => {
				if (a.href.indexOf("Exports") > -1) {
					_$(a.parentNode).addClass("d-none").remove()

				} else {
					_$(a).addClass("nav-link")
						.attr("href", _$.replace(a.href, "wiki/", Path))
				}
				if(a.href.indexOf("Home") > -1){ _$(a).addClass("active-link")}
			}).click(function(e) {
				e.preventDefault()
                _$("a", sidebar.first).removeClass("active-link")
                _$(this).addClass("active-link")
				loadMain(this.href)
			})
			_$("li > ul", sidebar.first).each((ul) => {
				let li = _$(ul).parent()
                let UID = _$.uniqueId("submenu")
                let a = _$("a",li.first).first
                li.addClass("dropdown", "d-flex", "flex-wrap")
                _$(ul).addClass("collapse", "w-100", "ps-3")
                    .attr("ID", UID)
                let Btn = `<button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="collapse" data-bs-target="#${UID}" aria-expanded="false">
 <span class="visually-hidden">Toggle Dropdown</span>
</button>
                `
                _$(Btn).insertAfter(a);
			})
		})
})