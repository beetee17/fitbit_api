// Authorization URL (use this to get an access token if expired)
//https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=23B229&redirect_uri=http%3A%2F%2Flocalhost&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=2592000


const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0IyMjkiLCJzdWIiOiI4NUs1UkwiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjIzMzMzMjIyLCJpYXQiOjE2MjI3Mjg5NzN9.jV9oc9pVD1BkDJ3uMNP9USmqx4qlYehZKWku4-kgs8k"

fetch('https://api.fitbit.com/1/user/-/activities/calories/date/today/today.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(function(json) {  
                        calories = json['activities-calories'][0]['value']
                        data = document.createElement('h2')
                        data.innerHTML =`${calories}`
                        document.body.appendChild(data)
                        
                        })