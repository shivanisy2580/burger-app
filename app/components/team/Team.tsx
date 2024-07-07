import TeamCard from "./TeamCard";

export default function Team() {
    return (
      <div className="pt-[5rem] pb-[3rem]">
        <h1 className="heading">
          Meet Our Expert <span className="text-orange-600">Chefs</span>
        </h1>
        <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
          {/* Team Card */}
          <TeamCard
            image="/images/t1.jpg"
            name="John Doe"
            position="Kitchen Porter"
          />
          <TeamCard
            image="/images/t2.jpg"
            name="Kon Doe"
            position="Executive Chef"
          />
          <TeamCard
            image="/images/t3.jpg"
            name="Hohn Doe"
            position="Head Chef"
          />
        </div>
      </div>
    );
}