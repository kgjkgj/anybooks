import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function LikeShare() {
    const {asPath}  = useRouter();

    const [stateLocal,setStateLocal] = useState('');
   

    useEffect(()=>{

        const Local  = document.location.href;

        setStateLocal(Local);

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
           <div className="fb-share-button" 
              data-href={stateLocal} 
              data-layout="button_count" 
              data-size="small">

              <a target="_blank" 
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" 
              className="fb-xfbml-parse-ignore">
              Chia sẻ
              </a>
          </div>
        
    )
}

export default LikeShare
