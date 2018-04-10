(function() {

  var me = {};
  
  me.isEmail = function(email) {
    var re = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
    return re.test(email);
  };

  me.isNumber = function(number) {
    var re = /^\d+$/;
    return re.test(number);
  };

  me.isNotEmpty = function(str) {
    return Boolean(str);
  };

  THE.validation = me;
}());