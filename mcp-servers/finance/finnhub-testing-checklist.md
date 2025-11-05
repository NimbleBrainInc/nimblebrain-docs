# Finnhub MCP Server - Testing Checklist

**Documentation File:** docs/mcp-servers/finance/finnhub.mdx
**Repository:** https://github.com/NimbleBrainInc/mcp-finnhub
**Date:** November 4, 2025

This checklist ensures the Finnhub MCP Server documentation is accurate, complete, and ready for production use. Complete all checks before publishing to Mintlify.

---

## Pre-Testing Setup

### Environment Preparation
- [ ] Docker Desktop installed and running
- [ ] Claude Desktop installed (latest version)
- [ ] Valid Finnhub API key obtained from [finnhub.io](https://finnhub.io)
- [ ] Text editor for editing claude_desktop_config.json
- [ ] Access to nimblebrain-docs repository

---

## Section 1: Documentation Accuracy

### Links Validation
- [ ] **GitHub Repository Link** - https://github.com/NimbleBrainInc/mcp-finnhub
  - [ ] Repository exists and is accessible
  - [ ] README.md matches expectations
  - [ ] Issues page is enabled

- [ ] **Finnhub API Documentation** - https://finnhub.io/docs/api
  - [ ] Link is valid and accessible
  - [ ] API documentation matches described features

- [ ] **Finnhub Registration** - https://finnhub.io/register
  - [ ] Signup page works
  - [ ] Free tier is available
  - [ ] API key is immediately accessible after signup

- [ ] **Docker Image Registry** - ghcr.io/nimblebraininc/mcp-finnhub
  - [ ] Image exists and is pullable
  - [ ] Latest tag is available
  - [ ] Image is maintained and up-to-date

- [ ] **Related Server Links** (if they exist)
  - [ ] /mcp-servers/finance/alpha-vantage
  - [ ] /mcp-servers/finance/yahoo-finance
  - [ ] /mcp-servers/finance/fmp

- [ ] **Support Links**
  - [ ] Discord invite link (update with actual link)
  - [ ] Support email (verify support@nimblebrain.ai is monitored)

### Rate Limit Verification
- [ ] **Free Tier** - 60 requests/minute
  - [ ] Verify against Finnhub's current pricing page
  - [ ] Confirm unlimited monthly requests

- [ ] **Paid Tiers** - Pricing accuracy
  - [ ] Verify Starter plan: 300 req/min at $39.99/mo
  - [ ] Verify Professional plan: 600 req/min at $89.99/mo
  - [ ] Verify Enterprise plan exists
  - [ ] Update if pricing has changed

### API Key Process
- [ ] **Signup Process**
  1. [ ] Go to finnhub.io/register
  2. [ ] Create account with email
  3. [ ] Verify email is required/not required
  4. [ ] API key is visible in dashboard
  5. [ ] Copy key successfully

---

## Section 2: Docker Configuration

### Docker Image Pull
- [ ] Run: `docker pull ghcr.io/nimblebraininc/mcp-finnhub:latest`
  - [ ] Image downloads successfully
  - [ ] Image size is reasonable (&lt;500MB)
  - [ ] No security vulnerabilities reported

### Standalone Docker Test
- [ ] Run: `docker run -i --rm -e FINNHUB_API_KEY=<your_key> ghcr.io/nimblebraininc/mcp-finnhub:latest`
  - [ ] Container starts without errors
  - [ ] Server initializes successfully
  - [ ] No crash or immediate exit

### Docker Health Check
- [ ] Run container with port mapping: `docker run -p 8000:8000 -e FINNHUB_API_KEY=<your_key> ghcr.io/nimblebraininc/mcp-finnhub:latest`
  - [ ] Container runs in background
  - [ ] Health check endpoint accessible: `curl http://localhost:8000/health`
  - [ ] Returns: `{"status": "healthy"}`

---

## Section 3: Claude Desktop Integration

### Configuration File Setup
- [ ] Locate claude_desktop_config.json
  - [ ] **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
  - [ ] **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
  - [ ] **Linux:** `~/.config/Claude/claude_desktop_config.json`

- [ ] Add configuration from documentation:
```json
{
  "mcpServers": {
    "finnhub": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "-e", "FINNHUB_API_KEY=your_api_key_here",
        "ghcr.io/nimblebraininc/mcp-finnhub:latest"
      ]
    }
  }
}
```

- [ ] Replace `your_api_key_here` with actual API key
- [ ] Verify JSON syntax is valid (no missing commas/brackets)
- [ ] Save file

### Claude Desktop Restart
- [ ] Quit Claude Desktop completely
- [ ] Relaunch Claude Desktop
- [ ] Wait for initialization (10-15 seconds)
- [ ] Check for any error messages

---

## Section 4: Tool Testing

### Test 1: get_stock_quote
**Prompt:** "What's the current stock price of Apple (AAPL)?"

**Expected Behavior:**
- [ ] Tool is called successfully
- [ ] Returns JSON with all fields:
  - [ ] symbol (AAPL)
  - [ ] current_price (number)
  - [ ] change (number)
  - [ ] percent_change (number)
  - [ ] high (number)
  - [ ] low (number)
  - [ ] open (number)
  - [ ] previous_close (number)
  - [ ] timestamp (ISO format)
  - [ ] retrieved_at (ISO format)
- [ ] Response time &lt; 5 seconds
- [ ] Data looks reasonable (price > 0, realistic values)

**Additional Tests:**
- [ ] Test with invalid symbol: "What's the stock price of INVALID?"
  - [ ] Returns error message
  - [ ] Error is user-friendly
- [ ] Test with multiple symbols: "Show me prices for AAPL, MSFT, and GOOGL"
  - [ ] Returns data for all three symbols
  - [ ] Each response is complete

### Test 2: get_company_profile
**Prompt:** "Tell me about Microsoft - what industry are they in and what's their market cap?"

**Expected Behavior:**
- [ ] Tool is called successfully
- [ ] Returns JSON with all fields:
  - [ ] name (Microsoft Corporation)
  - [ ] country (US)
  - [ ] currency (USD)
  - [ ] exchange (NASDAQ)
  - [ ] industry (Technology or similar)
  - [ ] logo (valid URL)
  - [ ] market_cap (number > 0)
  - [ ] ticker (MSFT)
  - [ ] web_url (microsoft.com)
  - [ ] ipo_date (date string)
  - [ ] retrieved_at (ISO format)
- [ ] Response time &lt; 5 seconds
- [ ] Logo URL is accessible

**Additional Tests:**
- [ ] Test with different company: "Give me Tesla's company profile"
  - [ ] Returns Tesla (TSLA) data
  - [ ] Industry is Automotive or similar

### Test 3: get_basic_financials
**Prompt:** "Show me Apple's financial metrics including P/E ratio, margins, and returns"

**Expected Behavior:**
- [ ] Tool is called successfully
- [ ] Returns JSON with key_metrics containing:
  - [ ] 52_week_high (number)
  - [ ] 52_week_low (number)
  - [ ] beta (number)
  - [ ] pe_ratio (number)
  - [ ] eps (number)
  - [ ] market_cap (number)
  - [ ] dividend_yield (number or null)
  - [ ] roe (number)
  - [ ] roa (number)
  - [ ] debt_to_equity (number)
  - [ ] current_ratio (number)
  - [ ] gross_margin (number)
  - [ ] operating_margin (number)
  - [ ] net_margin (number)
- [ ] all_metrics_available is true
- [ ] total_metrics > 50
- [ ] Response time &lt; 5 seconds

**Additional Tests:**
- [ ] Test comparison prompt: "Compare the P/E ratios of AAPL, MSFT, and GOOGL"
  - [ ] Returns data for all three symbols
  - [ ] P/E ratios are present and comparable

### Test 4: get_recommendation_trends
**Prompt:** "What are analysts saying about NVIDIA? Show me the recommendation trends."

**Expected Behavior:**
- [ ] Tool is called successfully
- [ ] Returns JSON with recommendations array
- [ ] Each recommendation period contains:
  - [ ] period (date string, e.g., "2025-01")
  - [ ] strong_buy (number)
  - [ ] buy (number)
  - [ ] hold (number)
  - [ ] sell (number)
  - [ ] strong_sell (number)
- [ ] periods_available > 0
- [ ] Response time &lt; 5 seconds
- [ ] At least one period has data

**Additional Tests:**
- [ ] Test with different stock: "What do analysts recommend for Apple?"
  - [ ] Returns AAPL recommendation data
  - [ ] Multiple periods available

### Test 5: get_market_news
**Prompt:** "What's the latest general market news?"

**Expected Behavior:**
- [ ] Tool is called successfully
- [ ] Returns JSON with news array
- [ ] Each news article contains:
  - [ ] headline (string)
  - [ ] summary (string)
  - [ ] url (valid URL)
  - [ ] datetime (ISO timestamp)
  - [ ] source (news source name)
  - [ ] category (string)
- [ ] count &lt;= 10 (limited to 10 articles)
- [ ] category is "general"
- [ ] Response time &lt; 5 seconds

**Additional Tests:**
- [ ] Test crypto news: "Show me the latest crypto news"
  - [ ] Returns news with category "crypto"
  - [ ] Articles are crypto-related
- [ ] Test forex news: "What's the latest forex news?"
  - [ ] Returns news with category "forex"
- [ ] Test merger news: "Show me recent merger and acquisition news"
  - [ ] Returns news with category "merger"

---

## Section 5: Error Handling

### Rate Limit Testing
- [ ] **Trigger Rate Limit**
  - [ ] Make 60+ requests within 1 minute
  - [ ] Verify 429 error is returned
  - [ ] Error message is clear and actionable
  - [ ] Provides guidance on waiting or upgrading

### Invalid API Key Testing
- [ ] **Test with Invalid Key**
  - [ ] Modify config with fake API key
  - [ ] Restart Claude Desktop
  - [ ] Attempt to use any tool
  - [ ] Verify 401 error is returned
  - [ ] Error message mentions invalid API key
  - [ ] Provides guidance on fixing

### Symbol Not Found Testing
- [ ] **Test with Invalid Symbol**
  - [ ] Prompt: "What's the stock price of NOTREAL?"
  - [ ] Verify error is returned
  - [ ] Error message indicates symbol not found
  - [ ] Suggests checking symbol or using search

### Docker Connection Testing
- [ ] **Test with Docker Not Running**
  - [ ] Stop Docker Desktop
  - [ ] Attempt to use any tool in Claude Desktop
  - [ ] Verify connection error is displayed
  - [ ] Error suggests checking Docker is running

---

## Section 6: Example Workflows

### Workflow 1: Portfolio Tracking
**Prompt:** "Show me current prices and today's performance for AAPL, GOOGL, MSFT, and TSLA"

- [ ] All 4 stocks are queried
- [ ] Returns current prices for all
- [ ] Shows change $ and change % for each
- [ ] Response time &lt; 10 seconds
- [ ] Total API calls: 4

### Workflow 2: Company Research
**Prompt:** "Give me a complete analysis of Tesla including company profile, financial metrics, and analyst recommendations"

- [ ] get_company_profile is called for TSLA
- [ ] get_basic_financials is called for TSLA
- [ ] get_recommendation_trends is called for TSLA
- [ ] All data is returned successfully
- [ ] Response time &lt; 15 seconds
- [ ] Total API calls: 3

### Workflow 3: Market Sentiment
**Prompt:** "What are the top market news stories today and what stocks are analysts most bullish on?"

- [ ] get_market_news is called
- [ ] Returns latest news articles
- [ ] Claude identifies stocks mentioned in news
- [ ] get_recommendation_trends called for identified stocks
- [ ] Provides sentiment analysis
- [ ] Response time &lt; 15 seconds

### Workflow 4: Stock Comparison
**Prompt:** "Compare Apple, Microsoft, and Google: show me their P/E ratios, profit margins, and market caps"

- [ ] get_basic_financials called for AAPL
- [ ] get_basic_financials called for MSFT
- [ ] get_basic_financials called for GOOGL
- [ ] Returns comparative data for all three
- [ ] Claude formats comparison clearly
- [ ] Response time &lt; 10 seconds
- [ ] Total API calls: 3

### Workflow 5: Earnings Analysis
**Prompt:** "Show me NVIDIA's latest financial performance including margins, returns, and what analysts are saying"

- [ ] get_basic_financials called for NVDA
- [ ] get_recommendation_trends called for NVDA
- [ ] Returns profitability metrics
- [ ] Returns analyst recommendations
- [ ] Claude interprets the data
- [ ] Response time &lt; 10 seconds
- [ ] Total API calls: 2

### Workflow 6: Combined Request
**Prompt:** "Compare the P/E ratios and analyst recommendations of Apple, Microsoft, and Google, then show me today's tech news"

- [ ] get_basic_financials called 3 times (AAPL, MSFT, GOOGL)
- [ ] get_recommendation_trends called 3 times
- [ ] get_market_news called with category "general" or "tech"
- [ ] All data returned successfully
- [ ] Claude combines information coherently
- [ ] Response time &lt; 20 seconds
- [ ] Total API calls: 7

---

## Section 7: Troubleshooting Section Verification

### Verify Each Troubleshooting Entry
- [ ] **Rate Limit Exceeded**
  - [ ] Error message example is accurate
  - [ ] Causes are correct
  - [ ] Solutions are actionable
  - [ ] Prevention tips are helpful

- [ ] **Invalid API Key**
  - [ ] Error message example is accurate
  - [ ] Solutions guide user to fix
  - [ ] Common mistakes are listed

- [ ] **Symbol Not Found**
  - [ ] Error message example is accurate
  - [ ] Symbol examples are correct (AAPL, MSFT, etc.)
  - [ ] Alternative symbols are valid (BRK.B)

- [ ] **Docker Connection Issues**
  - [ ] Error scenarios are realistic
  - [ ] Solutions cover common cases
  - [ ] Docker commands are correct

- [ ] **Empty or Missing Data**
  - [ ] Accurately describes when data is missing
  - [ ] Explanations are clear
  - [ ] Solutions are appropriate

- [ ] **Slow Response Times**
  - [ ] Expected response times are realistic
  - [ ] Causes are accurate
  - [ ] Solutions are helpful

---

## Section 8: Documentation Quality

### Readability
- [ ] **Non-Technical User Test**
  - [ ] Ask a non-technical person to follow Quick Start
  - [ ] Can they complete setup in under 5 minutes?
  - [ ] Do they understand each step?
  - [ ] Are error messages clear?

### Technical Accuracy
- [ ] **Developer Review**
  - [ ] Parameter types are correct
  - [ ] Return types are accurate
  - [ ] Code examples are valid
  - [ ] Docker commands work

### AI Assistant Parsing
- [ ] **Claude Test**
  - [ ] Ask Claude: "How do I set up the Finnhub MCP server?"
  - [ ] Does Claude provide accurate step-by-step instructions?
  - [ ] Can Claude troubleshoot common issues?
  - [ ] Does Claude understand all tools?

### Copy-Paste Accuracy
- [ ] **Configuration Test**
  - [ ] Copy configuration JSON directly from docs
  - [ ] Paste into claude_desktop_config.json
  - [ ] Works without modification (except API key)
  - [ ] No syntax errors

- [ ] **Docker Command Test**
  - [ ] Copy each Docker command from docs
  - [ ] Run in terminal
  - [ ] Works without modification
  - [ ] No errors

### Visual Formatting
- [ ] **Mintlify Preview** (if available)
  - [ ] All sections render correctly
  - [ ] Cards display properly
  - [ ] Accordions expand/collapse
  - [ ] Code blocks have syntax highlighting
  - [ ] Tables are formatted correctly
  - [ ] Icons display next to accordions
  - [ ] Links are clickable
  - [ ] No broken layouts

---

## Section 9: Compliance & Standards

### NimbleBrain Standards
- [ ] Docker-first deployment (no manual Python)
- [ ] Environment-based secrets (no hardcoded keys)
- [ ] stdio transport for Claude Desktop
- [ ] Business value emphasized
- [ ] Examples show real-world use cases

### Documentation Philosophy
- [ ] Show, don't tell (examples > theory)
- [ ] Copy-paste ready (no placeholders like "configure X appropriately")
- [ ] Error-aware (documents what goes wrong)
- [ ] Audience-appropriate (serves all three user types)

### Mintlify Best Practices
- [ ] Uses native components (Cards, Accordions)
- [ ] Code blocks are focused and annotated
- [ ] Progressive disclosure (simple → advanced)
- [ ] Visual hierarchy with icons
- [ ] No raw HTML (uses MDX components)

---

## Section 10: Final Checks

### Pre-Publication
- [ ] All links tested and valid
- [ ] All code examples tested and working
- [ ] All tool descriptions accurate
- [ ] All error messages verified
- [ ] All example workflows tested
- [ ] Spelling and grammar checked
- [ ] Consistent terminology throughout
- [ ] No placeholder text (e.g., "TODO", "TBD", "update this")

### Post-Publication
- [ ] Documentation is accessible at correct URL
- [ ] All internal links work
- [ ] Search functionality finds relevant content
- [ ] Mobile responsive design works
- [ ] Print-friendly format available
- [ ] Feedback mechanism is working

### User Feedback Collection
- [ ] Monitor GitHub issues for documentation-related questions
- [ ] Track common setup problems
- [ ] Update documentation based on feedback
- [ ] Add FAQ entries for recurring questions

---

## Sign-Off

### Documentation Review
- [ ] **Technical Reviewer:** __________________ Date: __________
  - Technical accuracy verified
  - All commands tested
  - Tools work as described

- [ ] **Business Reviewer:** __________________ Date: __________
  - Clear for non-technical users
  - Use cases are relevant
  - Business value is evident

- [ ] **User Testing:** __________________ Date: __________
  - Setup completed successfully
  - All tools tested
  - No blocking issues

### Approval for Publication
- [ ] **Documentation Lead:** __________________ Date: __________
  - All checklist items completed
  - Quality standards met
  - Ready for production

---

## Notes & Issues

**Issues Found During Testing:**
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

**Recommended Follow-Up Actions:**
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

**Nice-to-Have Improvements:**
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

---

## Testing Summary

**Total Checklist Items:** 200+
**Items Completed:** _____ / _____
**Pass Rate:** _____%
**Status:** ⬜ PASS | ⬜ FAIL | ⬜ CONDITIONAL PASS

**Overall Assessment:**
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________

**Ready for Production?** ⬜ YES | ⬜ NO | ⬜ WITH MODIFICATIONS

---

**Tester Name:** __________________________
**Date Completed:** ________________________
**Time Spent:** __________________________
**Next Review Date:** ______________________
