# WETAHER APP


## <u>INIT</u>
### DIV id = root
>   - Div id = zipInput
>       - input field *(5 dig only) else alert user.*
>       - get weather button
>   - **Div id = location**
>       - city
>       - *Lexington (api)*
>   - **Div id = temperature**
>       - temp
>       - kelvin 
>           - kelvinTemp (*api*)
>       - ferenheight 
>           - ferenheightTemp (*api*)
>       - celcius 
>           - celciusTemp (*api*)
>   - **Div id = conditions**
>       - condition
>       - *Light Rain (api)*
>   - **Div id = otherInfo**
>       - Other Info
>       - *Icon (api)*

### Add Bootsrap Classes



### LOGIC
> - On Page Load
>   -   Ask user to allow location to app
>       - if accepted
>           -fetch api using coordinates
>       - If rejected
>           - alert user to input a zipcode and make api call.


> - On Button click
>   - Get input from user from input field
>   - check to see if input is 5 digits
>       - input field validation
>   - if zip not included, end function
>   - if zip included, fet api

> - Create Variables from api
>   - City name
>   - Fahrenheit
>       - celsius = Fahrenheit - 32 * 5/9
>       - kelvin = Fahrenheit - 32 (* 5/9) + 273.5
>   - condition
>   - Icon

> - Insert variables into HTML

> - Create function createElemtns
>   -   classes
>   -   attribute
>   -   type
>   -   text



