var test = require('tape')
var blockReader = require('../')
var fs = require('fs')

test('can iter blocks',function(t){
  //


  var f = __dirname+'/file.txt';

  blockReader(f,4,function(err,reader,fd,stat){
    t.ok(!err,'should not have error opening fixture file');
    t.ok(reader,"should have the reader");

    reader.read(2,function(err,buf){
      t.equals(buf.toString(),"789\n","should have read correct data from offset");
      t.end();
    })
  });


});
