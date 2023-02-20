import Image from "next/image";
import kubernetes from '../../../public/kubernetes-.png'
import kubecost from '../../../public/kubecost.png'
import docker from '../../../public/docker.png'
import minikube from '../../../public/minikube.png'
import mongoDB from '../../../public/MongoDB.png'
import grafana from '../../../public/grafana.png'
import prometheus from '../../../public/prometheus.png'
import helm from '../../../public/helm.svg'
import cypress from '../../../public/cypress.png'

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
                    className="w-full "
                    src={kubecost}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-full contrast-200"
                    src={mongoDB}
                    alt="Logo"
                  />
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >

                  <Image
                    className="w-full"
                    src={grafana}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-24"
                    src={helm}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-56"
                    src={prometheus}
                    alt="Logo"
                  />
                </a>
                <a
                  href=""
                  className="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <Image
                    className="w-44"
                    src={cypress}
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
