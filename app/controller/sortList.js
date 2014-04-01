listeners: {
        change: function(field, newValue, oldValue) {
            console.log('Value of this toggle has changed:', (newValue) ? 'ON' : 'OFF');
        }
    }