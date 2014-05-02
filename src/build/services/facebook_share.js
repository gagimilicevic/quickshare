services_lib['facebook-share'] = {
    extractParams: _defaultParams, //facebook scrapes info for sharing
    makeUrl: function(params) {
        var href_url = 'https://www.facebook.com/sharer/sharer.php?u=' + params.src_url;
        return href_url;
    },
    getCount : function(url, callback) {
        $.ajax({
          url: "https://api.facebook.com/method/links.getStats?urls=" + url + "&format=json",
          success: function(data) {
            callback(data[0].share_count);
          },
          dataType: 'jsonp',
          crossDomain: true
        });
    },
    icon: 'facebook'
};