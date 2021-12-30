import { Application } from '../declarations';
import securityUser from './security/user/user.service';
import securityAccount from './security/account/account.service';
import securityRole from './security/role/role.service';
import securitySession from './security/session/session.service';
import dataTag from './data/tag/tag.service';
import communicationMessage from './communication/message/message.service';
import projectTicket from './project/ticket/ticket.service';
import projectTask from './project/task/task.service';
import communicationChannel from './communication/channel/channel.service';
import communicationChannelMember from './communication/channel-member/channel-member.service';
import communicationDm from './communication/dm/dm.service';
import projectSprint from './project/sprint/sprint.service';
import projectProject from './project/project/project.service';
import projectWorkflow from './project/workflow/workflow.service';
import projectTicketType from './project/ticket-type/ticket-type.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(securityUser);
  app.configure(securityAccount);
  app.configure(securityRole);
  app.configure(securitySession);
  app.configure(dataTag);
  app.configure(communicationMessage);
  app.configure(projectTicket);
  app.configure(projectTask);
  app.configure(communicationChannel);
  app.configure(communicationChannelMember);
  app.configure(communicationDm);
  app.configure(projectSprint);
  app.configure(projectProject);
  app.configure(projectWorkflow);
  app.configure(projectTicketType);
}
