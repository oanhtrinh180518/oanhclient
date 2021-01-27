import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthService } from './auth.service';

export class WebSocketAPI {
    webSocketEndPoint: string = 'http://localhost:8080/gs-guide-websocket';
    topic: string = "/user/queue/greetings";
    stompClient: any;
    homePageComponent: HomePageComponent;

    constructor(homePageComponent: HomePageComponent,private authenticationService: AuthService){
        this.homePageComponent = homePageComponent;
    }

    _connect() {
        console.log("Initialize WebSocket Connection");
        console.log(this.authenticationService.getLoggedInUserName(), "<-user");

        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame:any) {
            _this.stompClient.subscribe(_this.topic, function (sdkEvent:any) {
                _this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error:any) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }

 /**
  * Send message to sever via web socket
  * @param {*} message 
  */
    _send(message:any) {
        console.log("calling logout api via web socket");
        this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    }

    onMessageReceived(message:any) {
        console.log("Message Recieved from Server :: " + message);
        this.homePageComponent.handleMessage(JSON.stringify(message.body));
    }
}