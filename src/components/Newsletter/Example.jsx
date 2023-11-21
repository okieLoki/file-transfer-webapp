// Example.js
import "./Example.css"; // Import your CSS file

export default function Example() {
  return (
    <div className='example-container'>
      <div className='example-content'>
        <div className='example-grid'>
          <div className='example-left'>
            <h2 className='example-heading'>Subscribe to our newsletter.</h2>
            <p className='example-text'>
              Get Weekly Non-spam articles from the platform helping in have the
              deep understanding and establishing the connection with us along
              with end to end updates with ThaparShare.
            </p>
            <div className='example-form'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='example-input'
                placeholder='Enter your email'
              />
              <button type='submit' className='example-button'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
