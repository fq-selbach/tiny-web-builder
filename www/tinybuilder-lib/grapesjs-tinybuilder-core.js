grapesjs.plugins.add('tinybuilder-core', function(editor, options){
	
	//Commands
	editor.Commands.add('set-device-desktop', {
		run: function(editor){ editor.setDevice('Desktop'); }
	});
	editor.Commands.add('set-device-tablet', {
		run: function(editor){ editor.setDevice('Tablet'); }
	});
	editor.Commands.add('set-device-mobile', {
		run: function(editor){ editor.setDevice('Mobile'); }
	});
	
	//Blocks + Components
	var tinyCoreBlocks = {
		tinyAppView1: {
			label: "Simple app view",
			category: "TinyBuilder Page templates",
			blockAttributes: {"class": "fa fa-object-group"},
			comp: {
				tagName: "div",
				attributes: {"class": "tiny-builder tiny-page"},
				components: [{
					tagName: "div",
					attributes: {"class": "tiny-page-header"},
					components: "<span>Header</span>"		//`content` for static strings, `components` string will be parsed to Component
				},{
					tagName: "div",
					attributes: {"class": "tiny-page-content"},
					components: "<span>Content</span>"
				},{
					tagName: "div",
					attributes: {"class": "tiny-page-footer"},
					components: "<span>Footer</span>"
				}]
			}
		},
		tinyDiv1: {
			label: "Fullsize flex DIV",
			category: "Container elements",
			blockAttributes: {"class": "fa fa-square-o"},
			comp: {
				tagName: "div",
				attributes: {"class": "w100 h100 inline-flex flex-center scrollY"},
				components: "<span>DIV</span>"
			}
		},
		tinyNestedDiv1: {
			label: "Center DIV",
			category: "Container elements",
			blockAttributes: {"class": "fa fa-square-o"},
			comp: {
				tagName: "div",
				attributes: {"class": "w100 h100 inline-flex flex-center scrollY back-color-1"},
				components: {
					tagName: "div",
					attributes: {"class": "maxH100 maxW100"},
					components: {
						tagName: "div",
						attributes: {"class": "w512px h512px radius12 back-color-2"},
						components: "<span>Center</span>"
					}
				}
			}
		},
		tinyButtonFunction: {
			label: "Button function",
			category: "Action Elements",
			blockAttributes: {"class": "fa fa-hand-pointer-o"},
			comp: {
				tagName: 'button',
				//type: 'button',
				content: 'Button',
				attributes: {"class": "tiny-button"}
			}
		},
		tinyButtonLink: {
			label: "Button link",
			category: "Action Elements",
			blockAttributes: {"class": "fa fa-link"},
			comp: {
				tagName: 'a',
				type: 'link',
				content: 'Link',
				attributes: {"class": "tiny-button"}
			}
		},
		plainDiv: {
			label: "div",
			category: "Basic Elements",
			comp: {
				tagName: 'div',
				type: 'text',
				removable: true,
				draggable: true,	//'form, form *', // Can be dropped only inside `form` elements
				droppable: true,
				copyable: true,
				content: 'DIV',
				style: {
					//"min-height": "40px"
				},
				attributes: {}
			}
		},
		plainTextarea: {
			label: "textarea",
			category: "Basic Elements",
			comp: {
				tagName: 'textarea',
				type: 'text',
				droppable: false
			}
		},
		plainInput: {
			label: "input",
			category: "Basic Elements",
			comp: {
				tagName: 'input',
				droppable: false,
				attributes: {
					type: 'text',
					name: '',
					placeholder: 'Insert text here'
				},
				traits: ['name', 'placeholder',	{ type: 'checkbox', name: 'required' }]
			}
		}
	}
	
	Object.keys(tinyCoreBlocks).forEach(function(key){
		var compInfo = tinyCoreBlocks[key];
		var comp = compInfo.comp;
		editor.BlockManager.add('tinycore-' + key, {
			label: compInfo.label || key,
			category: compInfo.category || "Other",
			attributes: compInfo.blockAttributes || {},
			content: comp		//use `content` for static strings, `components` string will be parsed and transformed in Components
		});
	});
	
	//Style manager
	
	//not yet ready here?
	/*editor.StyleManager.addProperty("Typography", {
		name: "Vertical Align",
		property: "vertical-align",
		type: "select",
		default: "auto",
		list: [{
				value: "auto",
				name: "auto"
			}, {
				value: "top !important",
				name: "top"
			},
			{
				value: "middle !important",
				name: "middle"
			},
			{
				value: "bottom !important",
				name: "bottom"
			}
		]
	});*/
	//editor.StyleManager.getConfig().sectors[3].buildProps.push("vertical-align");
	editor.StyleManager.getConfig().sectors.forEach(function(sec){
		if (sec.name == "General"){
			sec.buildProps.push("overflow");
			console.log("GrapesJS - Plugin: tinybuilder-core - Added: StyleManager/General/overflow");
		}
	});

	console.log("GrapesJS - Installed plugin: tinybuilder-core");
});