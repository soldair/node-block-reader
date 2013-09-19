block-reader
============

read specific chunks of files by offset.

``js

var blockReader = require("block-reader")

blockReader("/somefile",1024,function(err,reader,fd,stat){

  reader.read(0,function(err,buf){
    console.log(buf,toString(),'this is bytes 0-1023 in from somefile');
  })

  reader.read(5,function(err,buf){

    console.log(buf,toString(),'this is bytes 4095-5119 from somefile');
  })

  reader.read(100,function(err,buf){
    // if the offset doesnt exist you should get an error.
    console.log(err)
  })

})


```

in some cases i already have a file descriptor and stat so i use ```fromFD```

```js

var blockReader = require("block-reader")
var stat = ..
var fd = ..


var reader = blockReader.fromFD(fd,stat.size,1024)


reader.read(0,function(err,buf){
  console.log(buf,toString(),'this is bytes 0-1023 in from somefile');
})

```

you may change the size of the file but you shouldn't need to create a new reader. if you want to access those offsets the reader will need to know the new size.

```js

fs.stat('/somefile',function(err,stat){

  reader.size(stat.size);

});

```



