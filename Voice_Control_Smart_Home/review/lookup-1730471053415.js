(function(window, undefined) {
  var dictionary = {
    "46b19afe-c868-4fc3-876e-4b6b99476eb4": "Light",
    "1136c717-4f5a-4b1a-950f-4170f955f459": "Alarm",
    "11798478-9187-4369-a391-a6307c0aa17f": "tv",
    "2a082bc3-5382-4d0a-8cc9-2def484b2de9": "Calendar",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "284a62b3-e1ea-421b-8a54-a0ddfb19a944": "Individual Features",
    "494f6488-dc45-4b93-b6fd-64e37ede3f7a": "Temperature",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);