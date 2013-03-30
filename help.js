var Help = {
	paras: [],
	para: function(h) {
		var p = $('<p></p>').html(h) 
		this.paras.push(p);
		return p;
	},
	display: function() {
		if (this.paras.length || $('div#agile_help_container').size()) {
			return;
		}
		var container = $('<div id="agile_help_container"></div>');
		this.para('<span class="agile_help_close">(close)</span>');
		this.para('<h1>UrPoints Help</h1>');
		this.para('<h3>如何填寫預估單位</h3>');
		this.para('在每張Card的標題最後用括號包住數字即可');
		this.para('<img src="https://dl.dropbox.com/u/19304934/UrPoints/s5.png"/>');
		this.para('<h3>如何填寫花費單位</h3>');
		this.para('在括號中加上左斜線，左斜線右方為預估單位數字，左方即為花費單位數字');
		this.para('<img src="https://dl.dropbox.com/u/19304934/UrPoints/s1.png"/>');
		this.para('<h3>圖示說明</h3>');
		this.para('"S:" = 花費單位 (Spent units)');
		this.para('"E:" = 預估單位 (Estimated units)');
		this.para('"R:" = 剩餘單位 (Remaining units untill all cards are done)');
		this.para('<img src="https://dl.dropbox.com/u/19304934/UrPoints/s4.png"/>');
		var body = $('body');
		$.each(this.paras, function(idx, obj) {
				container.append(obj);
			});
		container.click(function() {
				Help.close();
			});
		container.hide();
		body.append(container);
		container.fadeIn('fast');
	}, 
	close: function() {
		var container = $('div#agile_help_container');
		this.paras = [];
		container.fadeOut('fast', function() {
				container.remove();
			});
	}
}
