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
			longPick:{
				name:'long pick',
				value:'1',
				enabled:true,
				options:{
					1:{ name:'1', value:'1'},
					2:{ name:'2', value:'2 '},
					3:{ name:'3', value:'3 '},
					4:{ name:'4', value:'4 '},
					5:{ name:'5', value:'5 '},
					6:{ name:'6', value:'6 '},
					7:{ name:'7', value:'7 '},
					8:{ name:'8', value:'8 '},
					9:{ name:'9', value:'9 '},
					10:{ name:'10', value:'10 '},
					11:{ name:'11', value:'11 '},
					12:{ name:'12', value:'12 '},
					13:{ name:'13', value:'13 '},
					14:{ name:'14', value:'14 '},
					15:{ name:'15', value:'15 '},
					16:{ name:'16', value:'16 '},
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