export default function Typewriting({print}){
    const text = print; // The text you want to display with typewriter effect
    const typingSpeed = 100; // The speed of typing (in milliseconds)

    function typeWriter() {
      let i = 0;
      const typewriter = document.getElementById("typewriter");
      typewriter.innerHTML = ""; // Clear any existing content

      function type() {
        if (i < text.length) {
          typewriter.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, typingSpeed);
        }
      }

      type();
    }

    // Start the typewriter effect when the page loads
    window.onload = typeWriter;
    return(
        <div style={{fontFamily:"monospace",fontSize:"21px",fontWeight:"300",marginTop:"10px"}} id="typewriter"></div>
    )
}