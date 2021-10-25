import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function SaveFaceBook() {
    const {asPath}  = useRouter();
    useEffect(()=>{

        if(window.FB){
            window.FB.XFBML.parse();
        }
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : process.env.REACT_APP_FACEBOOK_APP_ID,
              cookie     : true,
              xfbml      : true,
              version    : 'v2.5'
            });
              
            window.FB.AppEvents.logPageView();   
              
          };
        
          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = "https://connect.facebook.net/vi_VN/sdk.js";
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));

    },[asPath])

    return (
        <div className="fb-save" data-uri='http://localhost:3000' data-size="small"></div>
    )
}

export default SaveFaceBook
