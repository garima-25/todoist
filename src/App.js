import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <section class="flex flex-col md:flex-row h-screen items-center">
  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <button type="button" class="mt-6 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center">
            <img src="https://image.flaticon.com/icons/png/512/2504/2504739.png" class="w-6 h-6"/>
            <span class="ml-4">
            Continue with Google</span>
            </div>
          </button>

      <button type="button" class="mt-3 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center">
            <img src="https://freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png" class="w-6 h-6"/>
            <span class="ml-4">
            Continue with Facebook</span>
            </div>
          </button>

      <button type="button" class="mt-3 w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-2 border border-gray-300">
            <div class="flex items-center justify-center">
            <img src="https://d3ptyyxy2at9ui.cloudfront.net/apple-728ddf.svg" class="w-6 h-6"/>
            <span class="ml-4">
            Continue with Apple</span>
            </div>
          </button>

      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required/>
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>

       <hr class="my-6 border-gray-300 w-full"></hr>


      <p class="mt-8">Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
              account</a></p>


    </div>
  </div>

</section>
</div>

  );
}

export default App;
