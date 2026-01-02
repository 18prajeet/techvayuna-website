import './OurTeamPage.css';
import { teamSections } from "./TeamData";
import MemberCard from '../../components/OurTeam/MemberCard';
const OurTeamPage = () =>{
    return(
        <div className="team-page">
            {teamSections.map((section, index) => {
                const isCore = section.title === "Core";
        return (
          <section className="team-section" key={index}>
            <h2 className="team-heading">{section.title}</h2>

            <div className={isCore ? "Core-grid" : "four-grid"}>
              {section.members.map((member, i) => (
                <MemberCard key={i} member={member} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
    );
}

export default OurTeamPage;