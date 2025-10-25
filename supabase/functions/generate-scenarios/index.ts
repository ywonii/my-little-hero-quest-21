import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = 'https://xufneikpvakgomsncqsp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Zm5laWtwdmFrZ29tc25jcXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzMjkyOTUsImV4cCI6MjA3MDkwNTI5NX0.klkp0MzI6ZnEiVuW8tgydZNzszJ_NYJTOzmBWAgUQ20';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API Key is not set');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { problemDescription } = await req.json();

    console.log('Generating scenarios for problem:', problemDescription);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: `당신은 경계선 지능 아동을 위한 교육 시나리오를 만드는 전문가입니다. 
            사용자가 제공한 문제 상황을 바탕으로 아동이 상황 판단력과 사회성을 기를 수 있는 시나리오 10개를 만들어주세요.
            각 시나리오는 3단계 난이도(beginner, intermediate, advanced)로 만들어야 합니다.
            
            각 시나리오는 다음 형식을 따라야 합니다:
            {
              "title": "간단한 상황 제목",
              "beginner": {
                "situation": "쉬운 수준의 구체적 상황 설명 (단순하고 명확한 상황)",
                "options": ["선택지1", "선택지2", "선택지3"],
                "correct_option": 0 또는 1 또는 2
              },
              "intermediate": {
                "situation": "중간 수준의 구체적 상황 설명 (약간 복잡한 상황)",
                "options": ["선택지1", "선택지2", "선택지3"],
                "correct_option": 0 또는 1 또는 2
              },
              "advanced": {
                "situation": "어려운 수준의 구체적 상황 설명 (복잡하고 세밀한 판단 필요)",
                "options": ["선택지1", "선택지2", "선택지3"],
                "correct_option": 0 또는 1 또는 2
              }
            }
            
            난이도별 차이:
            - beginner: 단순하고 명확한 상황, 쉬운 선택지
            - intermediate: 약간 복잡한 상황, 고민이 필요한 선택지
            - advanced: 복잡하고 미묘한 상황, 깊은 사고가 필요한 선택지
            
            반드시 유효한 JSON 배열만 반환하고, 코드 블록이나 추가 설명은 포함하지 마세요.` 
          },
          { 
            role: 'user', 
            content: `다음 문제 상황에 대한 교육 시나리오 10개를 3단계 난이도로 만들어주세요: ${problemDescription}` 
          }
        ],
        max_tokens: 6000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    let responseText = data.choices[0].message.content;

    // GPT가 코드 블록으로 감싸서 응답하는 경우 처리
    if (responseText.includes('```json')) {
      responseText = responseText.replace(/```json\s*/, '').replace(/```\s*$/, '');
    } else if (responseText.includes('```')) {
      responseText = responseText.replace(/```\s*/, '').replace(/```\s*$/, '');
    }

    // 앞뒤 공백 제거
    responseText = responseText.trim();

    console.log('Cleaned response text:', responseText);

    const scenarios = JSON.parse(responseText);

    console.log('Generated scenarios:', scenarios);

    // AI를 사용해서 의미있는 테마 이름 생성
    const themeResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: '주어진 문제 상황을 바탕으로 아이들이 이해하기 쉬운 테마 이름을 만들어주세요. 15글자 이내의 간단하고 친근한 제목으로 만드세요. 예: "친구와 갈등 해결하기", "학교에서 예의 지키기" 등. 테마 이름만 반환하세요.' 
          },
          { 
            role: 'user', 
            content: `다음 상황에 대한 테마 이름을 만들어주세요: ${problemDescription}` 
          }
        ],
        max_tokens: 100,
        temperature: 0.3,
      }),
    });

    const themeApiResponse = await themeResponse.json();
    const themeName = themeApiResponse.choices[0].message.content.trim().replace(/['"]/g, '');
    
    // 커스텀 테마 저장
    const { data: themeData, error: themeError } = await supabase
      .from('custom_themes')
      .insert([{
        theme_name: themeName,
        description: problemDescription
      }])
      .select()
      .single();

    if (themeError) {
      console.error('Error saving theme:', themeError);
      throw new Error('Failed to save theme');
    }

    // 시나리오들을 데이터베이스에 저장 (각 시나리오를 3단계 난이도로 저장)
    const savedScenarios = [];
    
    for (const scenario of scenarios) {
      // 각 난이도별로 시나리오 저장
      const difficulties = [
        { level: 1, key: 'beginner', data: scenario.beginner },
        { level: 2, key: 'intermediate', data: scenario.intermediate },
        { level: 3, key: 'advanced', data: scenario.advanced }
      ];

      for (const difficulty of difficulties) {
        // 시나리오 저장
        const { data: scenarioData, error: scenarioError } = await supabase
          .from('scenarios')
          .insert([{
            title: scenario.title,
            situation: difficulty.data.situation,
            category: 'custom',
            theme: themeData.theme_name,
            difficulty_level: difficulty.level
          }])
          .select()
          .single();

        if (scenarioError) {
          console.error(`Error saving ${difficulty.key} scenario:`, scenarioError);
          continue;
        }

        // 선택지 저장
        for (let i = 0; i < difficulty.data.options.length; i++) {
          const { error: optionError } = await supabase
            .from('scenario_options')
            .insert([{
              scenario_id: scenarioData.id,
              text: difficulty.data.options[i],
              option_order: i,
              is_correct: i === difficulty.data.correct_option
            }]);

          if (optionError) {
            console.error('Error saving option:', optionError);
          }
        }

        savedScenarios.push(scenarioData);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      theme: themeData,
      scenarios: savedScenarios,
      count: savedScenarios.length 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-scenarios function:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});