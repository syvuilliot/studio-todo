montageDefine("74d8be4","core/event/action-event-listener",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage;t.ActionEventListener=n.specialize({handler:{value:null},action:{value:null},initWithHandler_action_:{value:function(e,t){return this.handler=e,this.action=t,this}},handleEvent:{value:function(e){if("function"==typeof this.action){var t=this.handler?this.handler:this;this.action.call(t,e)}else this.handler&&this.action&&this.handler[this.action](e)}},serializeProperties:{value:function(e){e.set("handler",this.handler,"reference"),e.set("action",this.action)}}},{blueprintModuleId:e("montage")._blueprintModuleIdDescriptor,blueprint:e("montage")._blueprintDescriptor})}});