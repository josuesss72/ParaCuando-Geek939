import { BiPlus } from 'react-icons/bi';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col">
      <header className="w-full h-28 bg-blue-600 flex items-center">
        <h1 className="text-white text-5xl ml-[15%]">Profile</h1>
      </header>
      <div className="w-full h-screen">
        <div className="w-full max-w-[1325px] h-full flex flex-col mx-auto">
          <section className="h-[50%] flex flex-col justify-center gap-8">
            <h3 className="text-3xl">Contact information</h3>
            <div className="grid grid-cols-4 grid-rows-1 h-[60%]">
              <div className="flex flex-col gap-6">
                <div className="w-full  max-w-[250px] h-full bg-gray-300 rounded-lg flex justify-center items-center">
                  <button>
                    <BiPlus className="text-[40px] text-blue-600" />
                  </button>
                </div>
                <p className="text-xl text-gray-500">
                  Add a photo for your profile
                </p>
              </div>
              <form className="flex flex-col justify-center gap-10 col-span-3">
                <div className="flex flex-col relative">
                  <p className="bg-white text-gray-500 absolute left-3 -top-3 text-lg">
                    First Name
                  </p>
                  <input
                    className="w-full px-2 py-3 rounded-md border-2 text-lg border-gray-400"
                    type="text"
                  />
                </div>
                <div className="flex flex-col relative">
                  <p className="bg-white text-gray-500 absolute left-3 -top-3 text-lg">
                    Last name
                  </p>
                  <input
                    className="w-full px-2 py-3 text-lg rounded-md border-2 border-gray-400"
                    type="text"
                  />
                </div>
              </form>
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <h3 className="text-3xl">My interests</h3>
            <div className="h-72 grid grid-cols-3 grid-rows-1 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-full h-full rounded-2xl bg-[url('/shirt.png')] bg-cover"></div>
                <p className="text-xl text-center text-gray-500">
                  Add a category
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full h-full bg-slate-300 rounded-2xl flex justify-center items-center">
                  <button>
                    <BiPlus className="text-[40px] text-blue-600" />
                  </button>
                </div>
                <p className="text-xl text-center text-gray-500">
                  Add a category
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-full h-full bg-slate-300 rounded-2xl flex justify-center items-center">
                  <button>
                    <BiPlus className="text-[40px] text-blue-600" />
                  </button>
                </div>
                <p className="text-xl text-center text-gray-500">
                  Add a category
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="px-8 py-3 text-lg text-white bg-blue-600 rounded-3xl">
                Save Changes
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
