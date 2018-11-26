const PubSub = {
  publish: function(channel, payload){
    console.log(`Publish on channel ${channel} this ${payload}`);
    const event = new CustomEvent( channel, { detail: payload } );
    document.dispatchEvent(event);
  } ,
  subscribe: function (channel, callback){
    console.log(`Publish on channel ${channel}`);
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
