/**
 * [jsValidator description] valid the form before ajax
 * @param  {[type]} object       the champ for valide
 * @param  {[type]} condition   the condition(true meaning error)
 * @param  {[type]} msg       msg for display
 * @param  {[type]} formValid  form condition
 * @return {[type]} false or formValid
 */
function jsValidator(obj, condition, msg, formValid)
{
  if (condition)
  {
    if (!obj.hasClass("error"))
    {
      obj.addClass('error');
      obj.parent().append(msg);
      
      
    }
    return false;
  }
  else
  {
    if (obj.hasClass("error"))
    {
      obj.removeClass('error');
      obj.parent().find('label.error').remove();
    }
  }
  return formValid;
}
