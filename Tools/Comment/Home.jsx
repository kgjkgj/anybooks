import React, { useEffect ,useState } from 'react';
import { useRouter } from 'next/router';

function Comment() {
    const {pathname}  = useRouter();
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
    },[pathname])
   
    return (
        <div className = "comment">
                <div 
                    className="fb-comments" 
                    data-href='http://localhost:3000'
                    data-width="100%" 
                    data-numposts="5">
                </div>
        </div>
    )
}
export default Comment