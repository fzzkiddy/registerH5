$(document).ready(function(){
	$('#modal').hide()
//	function Browser() {
//		
//		cosnt ua = navigator.userAgent
//		console.log(ua)
//	}
//	Browser()
// 获取ua and ip
	const getUa = () => {
		const {userAgent} = navigator
		console.log(userAgent)
		return userAgent
	}


// 获取地理位置
	const getLocation = () => {
		let latitude = 0
		let longitude = 0
        //判断浏览器是否支持地理共享
        if(navigator.geolocation){
            //获取地理信息，并指定成功的回调函数
            navigator.geolocation.getCurrentPosition(function(pos){
                	// 纬度, 经度
                const {latitude, longitude} = pos.coords;//得到纬度
				// alert('经度：'+x+',纬度：'+y);//展示结果
            });
        }
        return { latitude: 0, longitude: 0 }
     } 
     // 获取手机号
    const getPhone = () => {
     	const phone = $('#phone').val()
     	if (!(/^1[34578]\d{9}$/.test(phone))) {
     		console.log('手机号格式错误')
     		return
     	}
     	return phone
     }
    console.log()
    // 获取验证码
     $('#sendCode').click(()=> {
     	console.log('sendCode')
     	const mobile = getPhone()
     	const ua = getUa()
     	console.log(getLocation())
     	const {latitude, longitude} = getLocation()
     	const formData = new FormData()
     	formData.append('mobile', phone)
     	formData.append('UA', ua)
     	formData.append('latitude', latitude)
     	formData.append('longitude', longitude)
     	var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://lw.dianpao.net/api/verificode",
		  "method": "POST",
		  "headers": {
		    "Content-Type": "application/x-www-form-urlencoded",
		    "Cache-Control": "no-cache",
		    "Postman-Token": "12a8c995-879b-dc35-ab29-c1c3ebeba72f"
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": formData
		}
     	
		$.ajax(settings).done(function (response) {
		  console.log(response);
		});
     })
     $('#appoint').click(()=> {
 		const height = $('body').height()
     	$('#modal').css('height', height)
		console.log(height)
     	$('#modal').show()
     	console.log(	$('#modal').show())
     	document.documentElement.scrollTop = 550
     	console.log('document.body.scrollTop', document.documentElement.scrollTop)
     	const mobile = getPhone()
     })
	$('#modal').click(() => {
		$('#modal').hide()
	})
})
