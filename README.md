# TheAccessPlatformTest
To launch the app run <code>react-native run-ios</code> or <code>react-native run-android</code> in the main dir.

![alt text](https://imgur.com/Yny7drA)

# Questions #

<ul>
<li>1. How long did you spend on the coding test? What would you add to your
solution if you had more time? If you didn't spend much time on the coding
test then use this as an opportunity to explain what you would add?

    I've spent 1/3 time on the coding. I'try to improve the design and add some animation. 
</li>

<li>2. What was the most useful feature that was added to the latest version of
your chosen language? Please include a snippet of code that shows how
you've used it </li>
  
    Managing local state using Hooks.
    
      const FadeInView = props => {
      const [fadeAdmin] = useState(new Animated.Value(0)); // Initial value for opacity: 0

      useEffect(() => {
       Animated.timing(fadeAdmin, {
        toValue: 1,
        duration: 500,
          }).start();
       }, [fadeAdmin]);
       ............................
      
 <li>How would you track down a performance issue in production? Have you
ever had to do this?</li>
    
    I've never had to do this. I know that we can use Profiler and Firebase perrfomance tool for this purpose.
    
<li>How would you improve the API that you used?</li>
    
    Structure of return data seems to be fine. 
    
<li>Please describe yourself using JSON</li>
    
    {
      "name": "Rostyslav Lytvyn",
      "age": 21,
      "interests": [
        {
          name: "Football"
          description: "Play footbal from the childhood"
        }
      ]
      "location": {
          "city": "Lviv",
          "country": "Ukraine",
          "address": "Prirodna 10",
          "zip": 921234
      }
    }
</ul>
