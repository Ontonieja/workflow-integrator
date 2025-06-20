const SLACK_AUTH_URL =
  "https://slack.com/oauth/v2/authorize?client_id=YOUR_SLACK_CLIENT_ID&scope=channels:read,chat:write&redirect_uri=http://localhost:3000/slack/callback";
const HUBSPOT_AUTH_URL =
  "https://app.hubspot.com/oauth/authorize?client_id=13bc07c5-bd65-4573-bef2-fd79124c9b74&scope=contacts%20crm.objects.deals.read&redirect_uri=http://localhost:3000/hubspot/callback";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-8">Integracje OAuth</h1>
      <button
        onClick={() => (window.location.href = SLACK_AUTH_URL)}
        className="mb-6 px-8 py-3 bg-green-500 hover:bg-green-600 cursor-pointer text-white rounded-lg text-lg transition"
      >
        Connect with slack
      </button>
      <button
        onClick={() => (window.location.href = HUBSPOT_AUTH_URL)}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg text-lg transition"
      >
        Connect with HubSpot
      </button>
    </div>
  );
}

export default App;
