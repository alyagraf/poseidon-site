import Image from "next/image";
import kubernetes from '../../../public/kubernetes-.png'
import kubecost from '../../../public/kubecost.png'
import docker from '../../../public/docker.png'
import minikube from '../../../public/minikube.png'
import mongoDB from '../../../public/mongoDB.png'
import grafana from '../../../public/grafana.png'

export default function Tech() {
  return (
    <>
      <section className="bg-slate-800 py-12 lg:py-[30px]">
        <div className="container mx-auto sm:grid-cols-2 xl:grid-cols-3">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >

                  <Image
                    className="w-full"
                    src={kubernetes}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-full"
                    src={minikube}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-full"
                    src={kubecost}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-full"
                    src={mongoDB}
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
