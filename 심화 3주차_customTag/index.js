//index.js
customTag.changeTagName("P");
customTag.changeTextContent("아기사자");
customTag.changeStyles("color", "red");
customTag.changeStyles("fontSize", "20px");
customTag.setId("myId");
customTag.addClassName("myClass1");
customTag.addClassName("myClass2");
customTag.removeClassName("myClass2");

customTag.render("container");
