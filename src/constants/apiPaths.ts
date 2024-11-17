const development = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

const production = {
  product: "https://50t8k9rb26.execute-api.us-east-1.amazonaws.com/prod",
  order: "https://50t8k9rb26.execute-api.us-east-1.amazonaws.com/prod",
  import: "https://g1tvclc2ml.execute-api.us-east-1.amazonaws.com/prod",
  bff: "https://50t8k9rb26.execute-api.us-east-1.amazonaws.com/prod",
  cart: "https://50t8k9rb26.execute-api.us-east-1.amazonaws.com/prod",
}

const API_PATHS = import.meta.env.MODE === 'production' ? production : development;


export default API_PATHS;
