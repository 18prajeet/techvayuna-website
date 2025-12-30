
import "./MemberCard.css";
import { Linkedin,Instagram} from "lucide-react";

export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={member.image} alt={member.name} className="member-img" />

      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>

      <div className="socials">
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank">
            <Linkedin />
          </a>
        )}
        {member.socials.instagram && (
          <a href={member.socials.instagram} target="_blank">
            <Instagram />
          </a>
        )}
      </div>
    </div>
  );
}
