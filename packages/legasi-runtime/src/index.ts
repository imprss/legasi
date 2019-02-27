const configurations = {};

// TODO: Finalize this



const addRuntime = function (key, config) {
	config.key = key;
	configurations[key] = {
		config: config, instance: {
			context: {},
			blabla: true,
			debugMode: false,
			setTimeout: function (fn, duration) { return window.setTimeout(fn, duration || 0); },
			translate: function (key) { return key; },
			event: {
				eventHandlers: [],
/*				on: function (e, script) {
					var handler = { event: e, script: script };
					window.legasi.event.eventHandlers.push(handler);
					return {
						cancel: function () {
							return window.legasi.event.eventHandlers.splice(window.legasi.event.eventHandlers.indexOf(handler), 1)[0];
						},
						updateHandler: function (fn) {
							if (handler && fn) handler.script = fn;
						}
					};
				},
				trigger: function (e, payload) {
					//var ownHandlers = _.filter(window.legasi.event.eventHandlers, { "event": e });
					var event = { name: e, timestamp: Date() };
					window.legasi.event.eventHandlers.forEach(function (handler) {
						if (handler.event === e && typeof handler.script == "function") handler.script(payload, event);
					});
				}
 */			},
			settings: {
				str: "test",
				modules: {
					getRecordById: () => { },
					getRecordsPaged: () => { },
					createRecord: () => { },
					publish: () => { },
					updateRecord: () => { },
					generateCustomModule: () => { },
					generateModuleFromLibrary: () => { },
					deleteRecord: () => { },
					getRoutesByModulePaged: () => { },
					createRoute: () => { },
					updateRoute: () => { },
					deleteRoute: () => { },
					getHistoryByModulePaged: () => { },
					getModuleHistoryById: () => { },
					republishByHistoryId: () => { },
				},
				scripts: {
					getRecords: () => { },
					getRecordById: () => { },
					getRecordsPaged: () => { },
					createRecord: () => { },
					publish: () => { },
					updateRecord: () => { },
					deleteRecord: () => { },
					getTriggersByScript: () => { },
					getTriggersByScriptPaged: () => { },
					createTrigger: () => { },
					updateTrigger: () => { },
					deleteTrigger: () => { },
					getRoutesByScriptPaged: () => { },
					createRoute: () => { },
					updateRoute: () => { },
					deleteRoute: () => { },
					getHistoryByScriptPaged: () => { },
					getScriptHistoryById: () => { },
					republishByHistoryId: () => { },
					run: () => { }
				},
				stylesheets: {
					getRecords: () => { },
					getRecordsPaged: () => { },
					createRecord: () => { },
					updateRecord: () => { },
					deleteRecord: () => { }
				},
				filters: {
					getRecords: () => { },
					createRecord: () => { },
					updateRecord: () => { },
					deleteRecord: () => { }
				},
				npm: {
					list: () => { },
					install: () => { },
					update: () => { },
					uninstall: () => { }
				},
				tools: () => { }
			},
			log: function () {
				if (!config) {
					throw new Error("No config provided!");
				}
				/* eslint-disable-next-line no-console */
				console.log.apply(window, arguments);
			},
			directives: {
/*				register: function (name, fn) {
					window.legasi.directives.registeredDirectives[name.replace(/-([a-z])/g, function ($1, $2) { return $2.toUpperCase(); })] = (module, dom, props, payload) => {
						var directiveName = name.replace(/-([a-z])/g, function ($1, $2) { return $2.toUpperCase(); });

						if (!dom.directiveValues) dom.directiveValues = {};

						dom.directiveValues[directiveName] = {
							directiveObj: fn(),
							module: module,
							attrs: props,
							payload: payload
						};
					};
				},
*/				registeredDirectives: {}
			},
			uuid: function () {
				function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
				return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
			},
			isMobile: function () {
				if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
					|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.substr(0, 4))) {
					return true;
				}
				return false;
			}
		}
	};



};

const removeRuntime = function (key) {
	delete configurations[key]
};

const legasi = function (val) {
	var key;
	if (!val) {
		if (Object.keys(configurations).length > 0) {
			key = Object.keys(configurations)[0];
		} else {
			throw new Error("A key or config object need to be supplied.");
		}
	} else if (typeof val === "string") {
		key = val;
	} else if (val.key) {
		addRuntime(val.key, val);
		key = val.key;
	} else {
		throw new Error("No configuration matched.");
	}

	var gijkieken = {
		context: {},
		debugMode: false,
		setTimeout: function (fn, duration) { return window.setTimeout(fn, duration || 0); },
		translate: function (key) { return key; },
		event: {
			eventHandlers: [],
/*			on: function (e, script) {
				var handler = { event: e, script: script };
				window.legasi.event.eventHandlers.push(handler);
				return {
					cancel: function () {
						return window.legasi.event.eventHandlers.splice(window.legasi.event.eventHandlers.indexOf(handler), 1)[0];
					},
					updateHandler: function (fn) {
						if (handler && fn) handler.script = fn;
					}
				};
			},
			trigger: function (e, payload) {
				//var ownHandlers = _.filter(window.legasi.event.eventHandlers, { "event": e });
				var event = { name: e, timestamp: Date() };
				window.legasi.event.eventHandlers.forEach(function (handler) {
					if (handler.event === e && typeof handler.script == "function") handler.script(payload, event);
				});
			}
 */		},
		settings: {
			str: "test",
			modules: {
				getRecordById: () => { },
				getRecordsPaged: () => { },
				createRecord: () => { },
				publish: () => { },
				updateRecord: () => { },
				generateCustomModule: () => { },
				generateModuleFromLibrary: () => { },
				deleteRecord: () => { },
				getRoutesByModulePaged: () => { },
				createRoute: () => { },
				updateRoute: () => { },
				deleteRoute: () => { },
				getHistoryByModulePaged: () => { },
				getModuleHistoryById: () => { },
				republishByHistoryId: () => { },
			},
			scripts: {
				getRecords: () => { },
				getRecordById: () => { },
				getRecordsPaged: () => { },
				createRecord: () => { },
				publish: () => { },
				updateRecord: () => { },
				deleteRecord: () => { },
				getTriggersByScript: () => { },
				getTriggersByScriptPaged: () => { },
				createTrigger: () => { },
				updateTrigger: () => { },
				deleteTrigger: () => { },
				getRoutesByScriptPaged: () => { },
				createRoute: () => { },
				updateRoute: () => { },
				deleteRoute: () => { },
				getHistoryByScriptPaged: () => { },
				getScriptHistoryById: () => { },
				republishByHistoryId: () => { },
				run: () => { }
			},
			stylesheets: {
				getRecords: () => { },
				getRecordsPaged: () => { },
				createRecord: () => { },
				updateRecord: () => { },
				deleteRecord: () => { }
			},
			filters: {
				getRecords: () => { },
				createRecord: () => { },
				updateRecord: () => { },
				deleteRecord: () => { }
			},
			npm: {
				list: () => { },
				install: () => { },
				update: () => { },
				uninstall: () => { }
			},
			tools: () => { }
		},
		log: function () {
			/* eslint-disable-next-line no-console */
			console.log.apply(window, arguments);
		},
		directives: {
/*			register: function (name, fn) {
				window.legasi.directives.registeredDirectives[name.replace(/-([a-z])/g, function ($1, $2) { return $2.toUpperCase(); })] = (module, dom, props, payload) => {
					var directiveName = name.replace(/-([a-z])/g, function ($1, $2) { return $2.toUpperCase(); });

					if (!dom.directiveValues) dom.directiveValues = {};

					dom.directiveValues[directiveName] = {
						directiveObj: fn(),
						module: module,
						attrs: props,
						payload: payload
					};
				};
			},
 */			registeredDirectives: {}
		},
		uuid: function () {
			function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
			return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
		},
        /**
        * This component takes a `theme` property.
        * It makes the `theme` available down the React tree thanks to React context.
        * This component should preferably be used at **the root of your component tree**.
        *
        * @param {string} str set of style mappings
        * @param {object|string} plop Hier kan ik wel uitleggen wat het betekend???
        * @param kwebbel a set of style mappings
        * @returns {string} the same styles that were passed in
        */
		isMobile: function (str, plop) {
			console.log(str, plop);
		}
	};

	gijkieken = configurations[key].instance;

	return gijkieken;

};

legasi.addApi = addRuntime;
legasi.removeApi = removeRuntime;


export default legasi; 