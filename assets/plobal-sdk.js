(function(){
    window.PlobalBridge = {
        adjustWebViewHeight:function(container){
            if(!container){
                var height = document.body.clientHeight;
            }else if(container == 0){
                var height = 0;
            }
            else if(container == -25){
                var height = -25;
            }else{
                var height = document.getElementById(container).clientHeight;
            }
            try {
                if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.adjustWebViewHeight){
                    window.webkit.messageHandlers.adjustWebViewHeight.postMessage(height);
                }
            } catch(e) {
                console.log("ios error adjustWebViewHeight");
                console.log(e);
            }
            if(!window.webkit && !window.AndroidBridge){
                console.log('adjustWebViewHeight  '+height);
            }
        },
        addLineItemProperty:function(obj){
            try {
                if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.addLineItemProperty){
                    window.webkit.messageHandlers.addLineItemProperty.postMessage(obj);
                }
            } catch(e) {
                console.log("ios error addLineItemProperty");
                console.log(e);
            }
            try {
                if(window && window.AndroidBridge && window.AndroidBridge.addLineItemProperty){
                    window.AndroidBridge.addLineItemProperty(JSON.stringify(obj));
                }
            } catch(e) {
                console.log("android error addLineItemProperty");
                console.log(e);
            }
            // if(!window.webkit && !window.AndroidBridge){
            //     console.log('addLineItemProperty  '+JSON.stringify(obj));
            // }
            console.log('addLineItemProperty  '+JSON.stringify(obj));
        },
        removeLineItemProperty:function(key){
            try {
                if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.removeLineItemProperty){
                    window.webkit.messageHandlers.removeLineItemProperty.postMessage(key);
                }
            } catch(e) {
                console.log("ios error addLineItemProperty");
                console.log(e);
            }
            try {
                if(window && window.AndroidBridge && window.AndroidBridge.removeLineItemProperty){
                    window.AndroidBridge.removeLineItemProperty(key);
                }
            } catch(e) {
                console.log("android error removeLineItemProperty");
                console.log(e);
            }
            if(!window.webkit && !window.AndroidBridge){
                console.log('removeLineItemProperty  '+key);
            }
        },
        callBridgeFunction:function(functionName, paramsIos, paramAndroid){
            try {
                if(window && window.AndroidBridge){
                    if(paramAndroid){
                        window.AndroidBridge[functionName](paramAndroid);
                    }
                    else{
                        window.AndroidBridge[functionName]();
                    }

                }
            } catch(e) {
                console.log("I got clicked android error");
                console.log(e);
            }

            try{
                if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[functionName]){
                    if(paramsIos){
                        window.webkit.messageHandlers[functionName].postMessage(paramsIos);
                    }
                    else{
                        window.webkit.messageHandlers[functionName].postMessage();
                    }
                }
            }
            catch(e){
                console.log("I got clicked ios error");
                console.log(e);
            }
        },
        isMobileApp:function(){
            try {
                if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.addLineItemProperty){
                    return true;
                }
            } catch(e) {
                console.log("ios error addLineItemProperty");
                console.log(e);
            }
            try {
                if(window && window.AndroidBridge && window.AndroidBridge.addLineItemProperty){
                    return true;
                }
            } catch(e) {
                console.log("android error addLineItemProperty");
                console.log(e);
            }
            return false;
        },
      	validateData:function(obj){
          try {
            if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.validateData){
              window.webkit.messageHandlers.validateData.postMessage(obj);
            }
          } catch(e) {
            console.log("ios error validateData");
            console.log(e);
          }
          try {
            if(window && window.AndroidBridge && window.AndroidBridge.validateData){
              window.AndroidBridge.validateData(JSON.stringify(obj));
            }
          } catch(e) {
            console.log("android error validateData");
            console.log(e);
          }
          // if(!window.webkit && !window.AndroidBridge){
          //
          // }
          console.log('validateData '+JSON.stringify(obj));
        },
    };
})();

