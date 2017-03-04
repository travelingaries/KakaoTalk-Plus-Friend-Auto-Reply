# Plus Friend Auto Reply
### KakaoTalk Plus Friend Auto Reply RESTful API Template / Node JS
<img src="http://cfile9.uf.tistory.com/image/11153F504F31DAD11712BA" alt="Title image" style="max-width:100%;">

Documentation: https://github.com/plusfriend/auto_reply

## How to create your own KakaoTalk Plus Friend Auto Reply

### 1. Setup
Either 
- download [zip](https://github.com/edwardjhchang/KakaoTalk-Plus-Friend-Auto-Reply/archive/master.zip), or
- clone https://github.com/edwardjhchang/KakaoTalk-Plus-Friend-Auto-Reply.git

### 2. Open code

### 3. Configure API
Navigate to /api. chat_room.js and friend.js are already configured.

#### Keyboard
keyboard.js defines the initial keyboard settings.

- Text input:

Change 

```javascript
var response = {
      "type": "buttons",
      "buttons" : ["Initial keyboard options"]
  };
```

to

```javascript
var response = {
  "type": "text"
}
```

- Button input:

Add buttons by using the following syntax:

```javascript
var response = {
      "type": "buttons",
      "buttons" : [
      	"Button 1",
      	"Button 2",
      	"Button 3"
      ]
  };
```

Three buttons are shown on each tab on the keyboard.

#### Message

* Button inputs are regarded as text type inputs.

- Define Responses

1. User is presented with text type input after your response:
```javascript
{
	"message": {
		"text": "my response"
	}
}
```

2. User is presented with button input after your response:
```javascript
{
	"message": {
		"text": "my response"
	},
	"keyboard": {
		// Same as keyboard.js
	}
}
```

- Check if user's input was text (both text and button inputs) or image

1. Text
```javascript
if(req.body.type == "text")
```

2. Image
```javascript
if(req.body.type == "photo")
```

Return the appropriate response.

## Contact

#### Email

edwardjhchang@gmail.com

#### Links

[Website (Under Construction)](http://edwardjhchang.herokuapp.com)

[Facebook](https://www.facebook.com/edward.chang.520)

[Instagram](https://www.instagram.com/prepared_impromptu/)