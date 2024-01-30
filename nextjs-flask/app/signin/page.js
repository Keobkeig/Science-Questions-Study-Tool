import '../styles.css'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/> 
      </Head>

      <div className="container">
        <h1>Welcome!</h1>

        <form action="/api/signin" method="POST">
          {error && 
            <p style={{color: 'red'}}>
              Invalid username or password. Please try again.
            </p>
          }

          <div className="input-container">
            <input type="text" name="username" placeholder="Username" required />
          </div>

          <div className="input-container">
            <input type="password" id="passwordInput" name="password" placeholder="Password" required/>
            <i id="toggleIcon" className="toggle-password fas fa-eye-slash" onClick={showPW}/>
          </div>
        
          <button type="submit">Sign In</button>
        </form>

        <p className="create-account">
          Don't have an account? <Link href="/create"><a>Create one</a></Link>
        </p>

        <a style={{textAlign: 'right'}} href="https://github.com/njimenez5844/stuy-project">About this Project</a>
      </div>
    </>
  )
}

function showPW() {
    var pwIn = document.getElementById("passwordInput");
    var toggle = document.getElementById("toggleIcon");
    
    if (pwIn.type === "password") {
        pwIn.type = "text";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    } else {
        pwIn.type = "password";
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    }
}