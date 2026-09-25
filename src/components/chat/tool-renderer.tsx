// src/components/chat/tool-renderer.tsx
import { Contact } from '../contact';
import Crazy from '../crazy';
import InternshipCard from '../InternshipCard';
import { Presentation } from '../presentation';
import AllProjects from '../projects/AllProjects';
import Resume from '../resume';
import Skills from '../skills';
import Sports from '../sport';

interface ToolRendererProps {
  toolInvocations: any[];
  messageId: string;
}

export default function ToolRenderer({
  toolInvocations,
  messageId,
}: ToolRendererProps) {
  return (
    <div className="w-full transition-all duration-300">
      {toolInvocations.map((tool) => {
        const { toolCallId, toolName } = tool;

        // Return specialized components based on tool name
        switch (toolName) {
          case 'getProjects':
            return (
              <div
                key={toolCallId}
                className="w-full overflow-hidden "
              >
                <AllProjects />
              </div>
            );

          case 'getPresentation':
            return (
              <div
                key={toolCallId}
                className="w-full overflow-hidden "
              >
                <Presentation />
              </div>
            );

          case 'getResume':
            return (
              <div key={toolCallId} className="w-full ">
                <Resume />
              </div>
            );

          case 'getContact':
            return (
              <div key={toolCallId} className="w-full ">
                <Contact />
              </div>
            );

          case 'getSkills':
            return (
              <div key={toolCallId} className="w-full ">
                <Skills />
              </div>
            );

          case 'getSports':
            return (
              <div key={toolCallId} className="w-full ">
                <Sports />
              </div>
            );

          case 'getCrazy':
            return (
              <div key={toolCallId} className="w-full ">
                <Crazy />
              </div>
            );

          case 'getInternship':
            return (
              <div key={toolCallId} className="w-full ">
                <InternshipCard />
              </div>
            );

          // Default renderer for other tools
          default:
            return (
              <div
                key={toolCallId}
                className="bg-secondary/10 w-full  p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{toolName}</h3>
                  <span className=" bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-100">
                    Tool Result
                  </span>
                </div>
                <div className="mt-2">
                  {typeof tool.result === 'object' ? (
                    <pre className="bg-secondary/20 overflow-x-auto  p-3 text-sm">
                      {JSON.stringify(tool.result, null, 2)}
                    </pre>
                  ) : (
                    <p>{String(tool.result)}</p>
                  )}
                </div>
              </div>
            );
        }
      })}
    </div>
  );
}
