var MRConfig = function(){
	this.brtag = "<br />";
	this.spaceString = " ";
	this.copyright = [
		"(c) Ngine Studios. All Rights Reserved.",
		"(c) WeMade Online Co., Ltd. All Rights Reserved.",
		"(c) NHN hangame Corp."
	];
	this.resourcePath = "./usr/data/arpiel.json";
	this.categories = [
		{"id": "cooking", "name": "料理"},
		{"id": "material", "name": "素材"},
		{"id": "blueprint", "name": "図面"},
		{"id": "furniture", "name": "家具"},
		{"id": "costume", "name": "衣装"}
	];
	this.reverseCategories = [
		{"id": "resource", "name": "フィールド"},
		{"id": "salesItem", "name": "店売り"},
	    {"id": "dungeonDrop", "name": "ダンジョンドロップ"},
		{"id": "cooking", "name": "料理"},
		{"id": "material", "name": "材料"},
		{"id": "blueprint", "name": "図面"}
	];
}

// accessor copyright
MRConfig.prototype.getCopyright = function(){
	return this.copyright.join(this.spaceString);
}
// accessor categories
MRConfig.prototype.getCategories = function(){
	return this.categories;
}
// accessor json data path
MRConfig.prototype.getDataPath = function(){
	return this.resourcePath;
}
// accessor reverse resolution categories
MRConfig.prototype.getReverseCategories = function(){
	return this.reverseCategories;
}