Pickl.prototype.Config = (function(){

	var config = {

		title:'Options',
		fields:{
			orientation:{
				name:'orientation',
				value:'righty',
				enabled:true,
				callback:null,
				options:{
					righty:{
						name:'righty',
						value:'RIGHTY'
					},
					lefty:{
						name:'lefty',
						value:'LEFTY'
					}
				}
			},
			instrument:{
				name:'instrument',
				value:'guitar',
				enabled:true,
				callback:null,
				options:{
					guitar:{
						name:'guitar',
						value:'GUITAR',
						enable:'tuning_guitar',
						disable:'tuning_banjo'
					},
					banjo:{
						name:'banjo',
						value:'BANJO',
						disable:'tuning_guitar',
						enable:'tuning_banjo'
					}
				}
			},
			tuning_guitar:{
				name:'tuning',
				value:'standard',
				enabled:true,
				options:{
					standard:{
						name:'standard',
						value:'EADGBE'
					},
					drop_d:{
						name:'drop d',
						value:'DADGBE'
					}
				}
			},
			tuning_banjo:{
				name:'tuning',
				value:'standard',
				enabled:false,
				options:{
					standard:{
						name:'standard',
						value:'EADG'
					},
					drop_d:{
						name:'drop d',
						value:'DADG'
					}
				}
			}
		}

	};

	return config;

}());