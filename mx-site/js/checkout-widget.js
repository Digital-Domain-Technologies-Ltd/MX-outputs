(function () {
  var CHECKOUT_API = 'https://reginald.allabout.network/api/v1/books/checkout';
  var statusEl = document.getElementById('buy-status');

  function handleBuy(product) {
    statusEl.textContent = 'Redirecting to checkout\u2026';

    fetch(CHECKOUT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: product }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.checkout_url) {
          window.location.href = data.checkout_url;
        } else {
          statusEl.textContent = data.error || 'Something went wrong. Please try again.';
        }
      })
      .catch(function () {
        statusEl.textContent = 'Connection error. Please try again.';
      });
  }

  document.getElementById('buy-pdf-btn').addEventListener('click', function () {
    handleBuy('pdf');
  });

  document.getElementById('buy-physical-uk-btn').addEventListener('click', function () {
    handleBuy('physical_uk');
  });

  document.getElementById('buy-physical-world-btn').addEventListener('click', function () {
    handleBuy('physical_world');
  });
})();
