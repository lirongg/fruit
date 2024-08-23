import React from "react";

function CheckOut() {
    return(<div>
        <h2>CheckOut</h2>
        <form>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Payment Method:</label>
          <select>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
        </div>)
}

export default CheckOut;