import Link from "next/link";

export default function Section1() {
  return (
    <>
      <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
          <span className="text-xs tracking-wider uppercase dark:text-violet-400">
            Step 1
          </span>
          <span className="text-xl font-bold md:text-2xl">
            Fork the Repo and Download the App
          </span>
          <span className="mt-4 dark:text-gray-300">
            Please access the following{" "}
            <a
              href="https://github.com/oslabs-beta/poseidon"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sky-500 dark:text-sky-500 hover:underline">
              LINK
            </a>
            . Once completed, utilize your terminal to clone the repository and
            determine the desired location for storage of the application.
          </span>
        </div>
      </div>
      <hr className="h-px my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
          <span className="text-xs tracking-wider uppercase dark:text-violet-400">
            Step 2
          </span>
          <span className="text-xl font-bold md:text-2xl">
            Install all Dependencies
          </span>
          <span className="mt-4 dark:text-gray-300">
            Once you open the application in your directory run the following
            command in your terminal
            <div className="mt-4 flex flex-col items-center">
              <div className="container mockup-code">
                <pre data-prefix="$">
                  <code>npm install </code>
                </pre>
              </div>
            </div>
          </span>
        </div>
      </div>
      <hr className="h-px my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
          <span className="text-xs tracking-wider uppercase dark:text-violet-400">
            Step 3
          </span>
          <span className="text-xl font-bold md:text-2xl">
            Deploy Clusters and Create .env File
          </span>
          <span className="mt-4 dark:text-gray-300">
            Prior to proceeding, please confirm the deployment status of your
            local and/or cloud clusters. Following confirmation, navigate to the
            root directory and generate a .env.local file. Subsequently, please
            copy and paste the following content into the .env.local file.
            <div className="mt-4 mockup-window border bg-slate-700">
              <div className="flex justify-center px-4 py-4 bg-base-200">
                NODE_ENV = development <br />
                MONGO_URI = &quot;[REPLACE THIS WITH YOUR MONGODB CONNECTION
                STRING]&quot; <br />
                NEXTAUTH_URL = http://localhost:3500 <br />
                BCRYPT_SALT = 10 <br />
                NEXTAUTH_SECRET = 12345678910 KUBECOST_IP = &quot;[REPLACE THIS
                WITH YOUR DEPLOYED KUBECOST IP ADDRESS]&quot; <br />
                LOCAL_KUBECOST_IP = &quot;[REPLACE THIS WITH YOUR LOCAL KUBECOST
                IP ADDRESS]&quot; <br />
                LOCAL_CLUSTER_IP = &quot;localhost:3300&quot; <br />
                LOCAL_CLUSTER_NAME = &quot;[REPLACE THIS WITH THE UNIQUE EMBED
                ID FROM YOUR LOCAL CLUSTER&apos;S GRAFANA SHARE LINK]&quot; <br />
                DEPLOYED_CLUSTER_IP = &quot;[REPLACE THIS WITH YOUR DEPLOYED*
                CLUSTER IP ADDRESS]&quot; <br />
                DEPLOYED_CLUSTER_NAME = &quot;[REPLACE THIS WITH THE UNIQUE
                EMBED ID FROM YOUR CLOUD HOSTED GRAFANA SHARE LINK]&quot; <br />
                DEPLOYED_CLUSTER_NAME_2 = &quot;[OPTIONAL: REPLACE THIS WITH THE
                UNIQUE EMBED ID FROM YOUR CLOUD HOSTED GRAFANA SHARE LINK]&quot;{" "}
                <br />
              </div>
            </div>
            <br />
            Be sure to replace the areas of all caps text including the enclosing square brackets with the specified information, then save the file.
            *Functions for both depolyments on AWS and/or Google .
          </span>
        </div>
      </div>
      <hr className="h-px my-8 mx-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
        <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
          <span className="text-xs tracking-wider uppercase dark:text-violet-400">
            Step 4
          </span>
          <span className="text-xl font-bold md:text-2xl">
            Run the App
          </span>
          <span className="mt-4 dark:text-gray-300">
          If you are just using a cloud-hosted cluster, type in the following command to get started:
            <div className="mt-4 flex flex-col items-center">
              <div className="container mockup-code">
                <pre data-prefix="$">
                  <code>npm run port</code>
                </pre>
              </div>
            </div>
            <br />
            If using cloud- and/or local-hosted clusters, type in the following to start:
            <div className="mt-4 flex flex-col items-center">
              <div className="container mockup-code">
                <pre data-prefix="$">
                  <code>npm run forward</code>
                </pre>
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
